import PrimaryButton from '@/common/PrimaryButton';

type AddNewPetProps = {};

const AddNewPet = ({}: AddNewPetProps) => {
    return (
        <PrimaryButton className='bg-transparent rounded-full h-20 w-20'>
            <span className='text-white font-semibold text-4xl'>+</span>
        </PrimaryButton>
    );
};

export default AddNewPet;
