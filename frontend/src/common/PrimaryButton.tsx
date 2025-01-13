import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

type PrimaryButtonProps = {
    children?: React.ReactNode;
    variant?:
        | 'default'
        | 'destructive'
        | 'outline'
        | 'secondary'
        | 'ghost'
        | 'link'
        | null
        | undefined;
    className?: string;
    type?: 'submit';
    id?: string;
};

const PrimaryButton = ({
    children,
    variant,
    className,
    type,
    id,
}: PrimaryButtonProps) => {
    return (
        <Button
            variant={variant}
            className={cn(
                className,
                'flex items-center gap-2 bg-rose-500 text-white font-semibold font-manrope hover:bg-rose-600 hover:text-white',
            )}
            type={type}
            id={id}
        >
            {children}
        </Button>
    );
};

export default PrimaryButton;
