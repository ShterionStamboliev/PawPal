import { useAuth } from '@/context/AuthContext';
import HeaderUser from '../HeaderUser';
import HeaderDefaultAvatar from '../HeaderDefaultAvatar';

const HeaderMobileUser = () => {
    const { isAuthenticated } = useAuth();

    return <>{isAuthenticated ? <HeaderUser /> : <HeaderDefaultAvatar />}</>;
};

export default HeaderMobileUser;
