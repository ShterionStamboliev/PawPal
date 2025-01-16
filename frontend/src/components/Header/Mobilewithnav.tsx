import { useState } from 'react';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/sheet';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function MobileNavWithAuth() {
    const [isSheetOpen, setIsSheetOpen] = useState(false);
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    return (
        <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
                <Button variant='outline' size='icon' className='md:hidden'>
                    <Menu className='h-6 w-6' />
                    <span className='sr-only'>Open menu</span>
                </Button>
            </SheetTrigger>
            <SheetContent side='left'>
                <SheetHeader>
                    <SheetTitle>Menu</SheetTitle>
                </SheetHeader>
                <nav className='flex flex-col space-y-4 mt-4'>
                    <a href='#' className='text-lg font-medium'>
                        Home
                    </a>
                    <a href='#' className='text-lg font-medium'>
                        About
                    </a>
                    <a href='#' className='text-lg font-medium'>
                        Contact
                    </a>
                </nav>
                <div className='mt-8'>
                    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                        <DialogTrigger asChild>
                            <Button
                                className='w-full'
                                onClick={() => setIsSheetOpen(false)}
                            >
                                Sign In or Sign Up
                            </Button>
                        </DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>Sign In or Sign Up</DialogTitle>
                                <DialogDescription>
                                    Enter your details to create an account or
                                    sign in to an existing one.
                                </DialogDescription>
                            </DialogHeader>
                            <form
                                onSubmit={(e) => e.preventDefault()}
                                className='space-y-4'
                            >
                                <div>
                                    <Label htmlFor='email'>Email</Label>
                                    <Input
                                        id='email'
                                        type='email'
                                        placeholder='Enter your email'
                                    />
                                </div>
                                <div>
                                    <Label htmlFor='password'>Password</Label>
                                    <Input
                                        id='password'
                                        type='password'
                                        placeholder='Enter your password'
                                    />
                                </div>
                                <Button type='submit' className='w-full'>
                                    Submit
                                </Button>
                            </form>
                        </DialogContent>
                    </Dialog>
                </div>
            </SheetContent>
        </Sheet>
    );
}
