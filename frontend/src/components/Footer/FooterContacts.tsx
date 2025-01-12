import { contacts } from '@/types/navigation';
import { Mail, Phone } from 'lucide-react';

type FooterContactsProps = {};

const FooterContacts = ({}: FooterContactsProps) => {
    return (
        <div className='flex flex-col gap-8'>
            <h2 className='font-semibold text-lg uppercase font-manrope'>
                Contacts
            </h2>
            <div className='flex flex-col gap-2'>
                <div className='flex flex-col relative'>
                    <Phone className='text-rose-950 absolute -left-8 top-6' />
                    <span className='text-rose-950'>{contacts.Phone.name}</span>
                    <span className='text-rose-950 font-semibold'>
                        {contacts.Phone.details}
                    </span>
                </div>
                <div className='flex flex-col relative'>
                    <Mail className='text-rose-950 absolute -left-8 top-6' />
                    <span className='text-rose-950'>{contacts.Email.name}</span>
                    <span className='text-rose-950 font-semibold'>
                        {contacts.Email.details}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default FooterContacts;
