import { useAuth } from '@/context/AuthContext';
import { cn } from '@/lib/utils';
import { User } from 'lucide-react';

type HeaderMobileUserProps = {
    className?: string;
};

const HeaderMobileUser = ({ className }: HeaderMobileUserProps) => {
    const { user, isAuthenticated } = useAuth();

    return (
        <>
            {isAuthenticated ? (
                <div
                    className={cn(
                        'relative w-10 h-10 bg-red-300 rounded-full',
                        'md:inline-flex',
                        className,
                    )}
                >
                    <span
                        className={cn(
                            'absolute top-1 left-1 right-1 text-lg font-semibold sm:left-3.5 text-rose-600',
                            'md:inline-flex',
                            className,
                        )}
                    >
                        {user?.firstName?.slice(0, user.firstName.length)[0]}
                    </span>
                    <span
                        className={cn(
                            'text-sm absolute left-12 top-2 text-rose-600',
                            className,
                        )}
                    >
                        {user?.email}
                    </span>
                </div>
            ) : (
                <div
                    className={cn(
                        'relative w-10 h-10 bg-red-300 rounded-full',
                        'md:inline-flex',
                        className,
                    )}
                >
                    <span
                        className={cn(
                            'absolute top-1 left-1 right-1 sm:left-3.5 text-rose-600',
                            'md:inline-flex',
                            className,
                        )}
                    >
                        <User size={24} className='absolute right-1 top-1' />
                    </span>
                </div>
            )}
        </>
    );
};

export default HeaderMobileUser;
