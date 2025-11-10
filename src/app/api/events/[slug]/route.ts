import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Event from '@/database/event.model';

// Interface for route parameters
interface RouteParams {
    params: Promise<{
        slug: string;
    }>;
}

/**
 * GET /api/events/[slug]
 * Fetches a single event by its slug
 */
export async function GET(
    req: NextRequest,
    { params }: RouteParams
): Promise<NextResponse> {
    try {
        await connectDB();

        // Extract slug from params
        const { slug } = await params;

        // Validate slug parameter
        if (!slug || slug.trim() === '') {
            return NextResponse.json(
                {
                    message: 'Invalid or missing slug parameter',
                },
                { status: 400 }
            );
        }

        // Sanitize slug (ensure lowercase and trimmed)
        const sanitizedSlug = slug.trim().toLowerCase();

        // Query the database for the event
        const event = await Event.findOne({
            slug: sanitizedSlug,
        }).lean();

        // Check if event exists
        if (!event) {
            return NextResponse.json(
                {
                    message: `Event with slug ${sanitizedSlug} not found`,
                },
                { status: 404 }
            );
        }

        // Return successful response with event data
        return NextResponse.json(
            {
                message: 'Event fetched successfully',
                event,
            },
            { status: 200 }
        );
    } catch (error) {
        // Log the error for debugging (in development only)
        if (process.env.NODE_ENV === 'development') {
            console.error('Error fetching event by slug:', error);
        }

        // Handle other specific errors
        if (error instanceof Error) {
            if (error.message.includes('MONGODB_URI')) {
                return NextResponse.json(
                    {
                        message: 'Database connection failed',
                    },
                    { status: 500 }
                );
            }
            return NextResponse.json(
                {
                    message: 'Failed to fetch event',
                    ...(process.env.NODE_ENV === 'development' && {
                        error: error.message,
                    }),
                },
                { status: 500 }
            );
        }

        // Handle unknown errors
        return NextResponse.json(
            {
                message: 'An unexpected error occurred',
            },
            { status: 500 }
        );
    }
}
