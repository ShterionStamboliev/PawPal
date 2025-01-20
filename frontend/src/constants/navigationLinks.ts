import { NavigationLink } from '@/types/navigation';

export const headerNavLinks: NavigationLink[] = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Contacts', path: '/contacts' },
];

export const footerExploreLinks: NavigationLink[] = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Contacts', path: '/contacts' },
];

export const footerServicesLinks: NavigationLink[] = [
    { name: 'Dental Care', path: '/dental-care' },
    { name: 'Nutrition', path: '/nutrition' },
    { name: 'Grooming', path: '/grooming' },
];

export const userNavigation: NavigationLink[] = [
    { name: 'Dashboard', path: '/dashboard/profile' },
];

export const dashboardNav: NavigationLink[] = [
    { name: 'Profile', path: '/dashboard/profile' },
    { name: 'My Pets', path: '/dashboard/my-pets' },
];
