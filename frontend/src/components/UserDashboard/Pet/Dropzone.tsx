import Dropzone from 'react-dropzone';
import { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { FormField, FormMessage } from '@/components/ui/form';
import { cn } from '@/lib/utils';
import { usePetHook } from '@/hooks/forms/pet/usePetHook';
import { Cloud } from 'lucide-react';

type DropzoneInputProps = {
    name: string;
    petId: string;
};

const DropzoneInput = ({ name, petId }: DropzoneInputProps) => {
    const { control } = useFormContext();
    const [preview, setPreview] = useState<string | null>(null);

    const { useUploadPetImage } = usePetHook();

    const uploadImage = useUploadPetImage(petId);

    return (
        <FormField
            control={control}
            name={name}
            render={({ field: { onChange } }) => (
                <>
                    <Dropzone
                        accept={{ 'image/*': ['.jpg', '.jpeg', '.png'] }}
                        onDropAccepted={(acceptedFiles) => {
                            if (acceptedFiles.length > 0) {
                                const file = acceptedFiles[0];
                                uploadImage.mutate(file, {
                                    onSuccess: (image) => {
                                        onChange(image);
                                        setPreview(URL.createObjectURL(file));
                                    },
                                });
                            }
                        }}
                        multiple={false}
                        maxSize={5000000}
                    >
                        {({ getRootProps, getInputProps }) => (
                            <div
                                {...getRootProps({
                                    className: cn(
                                        'p-3 mb-4 flex flex-col items-center justify-center w-full rounded-md cursor-pointer border',
                                    ),
                                })}
                            >
                                <input {...getInputProps()} />
                                <div className='flex items-center gap-x-3 mt-2 mb-2'>
                                    {preview ? (
                                        <img
                                            src={preview}
                                            alt='Preview'
                                            className='h-20 w-auto object-contain'
                                        />
                                    ) : (
                                        <span className='flex flex-col text-sm items-center justify-center'>
                                            <Cloud className='' />
                                            Drag & drop an image of your pet, or
                                            click here to select one
                                        </span>
                                    )}
                                </div>
                            </div>
                        )}
                    </Dropzone>
                    <FormMessage />
                </>
            )}
        />
    );
};

export default DropzoneInput;
