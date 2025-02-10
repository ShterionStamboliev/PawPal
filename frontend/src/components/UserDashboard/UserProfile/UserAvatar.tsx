import doc from '@/assets/doctor-3.jpg';

const UserAvatar = () => {
    return (
        <div className='bg-rose-400 rounded-t-lg relative max-h-44'>
            <div className='aspect-video'>
                <img
                    src={doc}
                    className='absolute object-cover bg-white p-0.5 rounded-full w-28 h-28 left-1/2 transform -translate-x-1/2 -bottom-14 mx-auto'
                />
            </div>
        </div>
    );
};

export default UserAvatar;
