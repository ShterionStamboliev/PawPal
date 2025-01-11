import { Button } from '@/components/ui/button';

type PrimaryButtonProps = {
    children?: React.ReactNode;
};

const PrimaryButton = ({ children }: PrimaryButtonProps) => {
    return (
        <Button className='flex items-center gap-2 px-4 py-2 bg-rose-500 text-white font-semibold font-manrope hover:bg-rose-600'>
            {children}
        </Button>
    );
};

export default PrimaryButton;
