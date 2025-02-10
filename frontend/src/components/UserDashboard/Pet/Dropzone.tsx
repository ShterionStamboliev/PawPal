// import Dropzone, { useDropzone } from 'react-dropzone';
// import { useState } from 'react';
// import { Controller, useFormContext } from 'react-hook-form';
// import {
//     FormControl,
//     FormField,
//     FormItem,
//     FormMessage,
// } from '@/components/ui/form';
// import { Card } from '@/components/ui/card';
// import { UploadCloud } from 'lucide-react';
// import { cn } from '@/lib/utils';

// type DropzoneInputProps = {
//     name: string;
// };

// const DropzoneInput = ({ name }: DropzoneInputProps) => {
//     const { control } = useFormContext();
//     const [preview, setPreview] = useState<string | null>(null);

//     return (
//         <FormField
//             control={control}
//             name={name}
//             render={() => (
//                 <Dropzone
//                     accept={{
//                         'image/*': ['.jpg', '.jpeg', '.png'],
//                     }}
//                     onDropAccepted={(acceptedFiles) => {
//                         acceptedFiles.map((acceptedFile) => {
//                             return {
//                                 file: acceptedFile,
//                                 name: '',
//                                 description: '',
//                                 price: 0,
//                             };
//                         });
//                     }}
//                     multiple={true}
//                     maxSize={5000000}
//                 >
//                     {({ getRootProps, getInputProps }) => (
//                         <div
//                             {...getRootProps({
//                                 className: cn(
//                                     'p-3 mb-4 flex flex-col items-center justify-center w-full rounded-md cursor-pointer border border-[#e2e8f0]',
//                                 ),
//                             })}
//                         >
//                             <div className='flex items-center gap-x-3 mt-2 mb-2'>
//                                 <label
//                                     htmlFor='Products'
//                                     className={`text-sm text-[7E8DA0] cursor-pointer focus:outline-none focus:underline`}
//                                 >
//                                     Add your Product Images
//                                     <input {...getInputProps()} />
//                                 </label>
//                             </div>
//                         </div>
//                     )}
//                 </Dropzone>
//             )}
//         />
//     );
// };

// export default DropzoneInput;
