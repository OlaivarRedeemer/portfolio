import { IWorkCard } from '@/lib/types';

export const workSectionContent: IWorkCard[] = [
    {
        title: 'Brooky',
        description:
            'Designing the system of a startup that automates the reservation process for real estate transactions.',
        image: '/assets/images/works/brooky-dashboard-1.png',
        bgClass: 'bg-[#102F52] rounded-none sm:rounded-3xl',
        titleClass: 'text-white',
        descriptionClass: 'text-secondary-text',
        buttonClass: 'text-white',
        shadowClass: 'shadow-[0px_4px_50px_0px#071C34]',
        url: '/',
    },
    {
        title: 'Dazle',
        description: 'Designing the website that organized property listings for real estate professionals.',
        image: '/assets/images/works/dazle-1.png',
        bgClass: 'bg-[#1F4BC6] rounded-none sm:rounded-3xl',
        titleClass: 'text-white',
        descriptionClass: 'text-secondary-text',
        buttonClass: 'text-white',
        shadowClass: 'shadow-[0px_4px_50px_0px#4140A8]',
        url: '/',
        reversed: true,
    },
];
