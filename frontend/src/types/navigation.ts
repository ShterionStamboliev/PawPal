export type NavigationLink = {
    name: string;
    path: string;
};

type ContactName = 'Phone' | 'Email';

type Contacts = {
    name: string;
    details: string;
};

export const contacts: Record<ContactName, Contacts> = {
    Phone: { name: 'Phone', details: '+49 8888 88-88' },
    Email: { name: 'Email', details: 'info@pawpal.en' },
};
