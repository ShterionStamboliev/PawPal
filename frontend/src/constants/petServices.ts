import { PetService } from '@/types/pet';
import dogWithBone from '@/assets/dog-with-bone.png';
import dogWithFood from '@/assets/dog-with-food.png';
import dogGrooming from '@/assets/dog-grooming.png';

export const petServices: PetService[] = [
    {
        name: 'Dental Care',
        image: dogWithBone as string,
        description:
            "Maintaining your pet's oral hygiene is crucial for their overall health. Our dental care services include teeth cleaning, polishing, and treatment for gum diseases to keep their smiles healthy and bright.",
    },
    {
        name: 'Nutrition',
        image: dogWithFood as string,
        description:
            "A balanced diet is the foundation of your pet's health and well-being. Our nutrition counseling helps you choose the right food and feeding plans tailored to your pet's age, breed, and lifestyle.",
    },
    {
        name: 'Grooming',
        image: dogGrooming as string,
        description:
            'Regular grooming keeps your pet looking and feeling their best. Grooming also helps detect skin conditions early, ensuring a healthy coat and skin.',
    },
];
