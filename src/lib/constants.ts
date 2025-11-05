export type EventItem = {
    title: string;
    image: string; // path under public/, e.g. /images/event1.png
    slug: string;
    location: string;
    date: string; // human-friendly date string
    time: string; // human-friendly time string
};

export const events: EventItem[] = [
    {
        title: 'Next.js Conf 2026',
        image: '/images/event1.png',
        slug: 'nextjs-conf-2026',
        location: 'San Francisco, CA, USA',
        date: 'Mar 10, 2026',
        time: '09:00 AM PST',
    },
    {
        title: 'React Summit 2026',
        image: '/images/event2.png',
        slug: 'react-summit-2026',
        location: 'Amsterdam, Netherlands',
        date: 'Apr 21–22, 2026',
        time: '09:30 CET',
    },
    {
        title: 'JSConf EU 2026',
        image: '/images/event3.png',
        slug: 'jsconf-eu-2026',
        location: 'Berlin, Germany',
        date: 'May 14–16, 2026',
        time: '10:00 CEST',
    },
    {
        title: 'GraphQL Summit 2026',
        image: '/images/event4.png',
        slug: 'graphql-summit-2026',
        location: 'San Jose, CA, USA',
        date: 'Jun 2–3, 2026',
        time: '09:00 AM PST',
    },
    {
        title: 'Global Dev Hackathon 2026',
        image: '/images/event5.png',
        slug: 'global-dev-hackathon-2026',
        location: 'Online',
        date: 'Jul 18–20, 2026',
        time: 'Starts 08:00 UTC',
    },
    {
        title: 'AI & ML Dev Summit 2026',
        image: '/images/event6.png',
        slug: 'ai-ml-dev-summit-2026',
        location: 'New York, NY, USA',
        date: 'Sep 12, 2026',
        time: '09:00 AM EST',
    },
];
