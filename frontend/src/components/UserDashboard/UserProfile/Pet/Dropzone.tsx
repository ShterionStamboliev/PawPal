import { useDropzone } from 'react-dropzone';
import { useState } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import {
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from '@/components/ui/form';
import { Card } from '@/components/ui/card';
import { UploadCloud } from 'lucide-react';

type DropzoneInputProps = {
    name: string;
};

const DropzoneInput = ({ name }: DropzoneInputProps) => {
    const { control } = useFormContext();
    const [preview, setPreview] = useState<string | null>(null);

    return (
        <FormField
            control={control}
            name={name}
            render={() => (
                <FormItem>
                    <FormControl>
                        <Controller
                            name={name}
                            control={control}
                            render={({ field }) => {
                                const onDrop = (acceptedFiles: File[]) => {
                                    const file = acceptedFiles[0].name;
                                    console.log(file);

                                    if (file) {
                                        setPreview(
                                            URL.createObjectURL(
                                                acceptedFiles[0],
                                            ),
                                        );
                                        field.onChange(file);
                                    }
                                };

                                const {
                                    getRootProps,
                                    getInputProps,
                                    isDragActive,
                                } = useDropzone({
                                    onDrop,
                                    accept: { 'image/*': [] },
                                    maxSize: 5 * 1024 * 1024,
                                });

                                return (
                                    <div
                                        {...getRootProps()}
                                        className='cursor-pointer'
                                    >
                                        <input {...getInputProps()} />
                                        <Card className='p-6 text-center border-dashed border-2 rounded-xl'>
                                            {isDragActive ? (
                                                <p className='text-gray-500'>
                                                    Drop the image here...
                                                </p>
                                            ) : preview ? (
                                                <img
                                                    src={preview}
                                                    alt='Preview'
                                                    className='w-32 h-32 mx-auto object-cover rounded-lg'
                                                />
                                            ) : (
                                                <div className='flex flex-col items-center gap-2'>
                                                    <UploadCloud className='h-8 w-8 text-gray-500' />
                                                    <p className='text-gray-500'>
                                                        Drag & drop an image or
                                                        click to select
                                                    </p>
                                                </div>
                                            )}
                                        </Card>
                                    </div>
                                );
                            }}
                        />
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />
    );
};

export default DropzoneInput;
