import { Button } from '@/components/ui/button';

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
};

const PrimaryButton = ({ children, variant }: PrimaryButtonProps) => {
    return (
        <Button
            variant={variant}
            className='flex items-center gap-2 px-4 py-2 bg-rose-500 text-white font-semibold font-manrope hover:bg-rose-600 hover:text-white'
        >
            {children}
        </Button>
    );
};

export default PrimaryButton;
