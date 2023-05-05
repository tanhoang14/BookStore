import { Layout } from 'antd'
import getAllowedRoutes from './AllowedRoutes';
import PrivateRoutesConfig from './PrivateRoutesConfig';
import { useSelector } from "react-redux";
import MapAllowedRoutes from './MapAllowedRoutes';

import PublicRoutes from './PublicRoutes'


const PrivateRoutes = (props) => {
    const security = useSelector(state => state.security)
    let allowedRoutes = [];
    const { Content } = Layout
    
    allowedRoutes = security.validToken ? getAllowedRoutes(PrivateRoutesConfig) : getAllowedRoutes(PublicRoutes)


    return (
        <Content className='container'>
            <MapAllowedRoutes
                routes={allowedRoutes}
                basePath=""
                isAddNotFound
            />
        </Content>
    );
}

export default PrivateRoutes;

    // const { SET_CURRENT_USER } = types
    // const jwtToken = localStorage.jwtToken;
    // const dispatch = useDispatch()

    // if (jwtToken) {
    //     setJwt(jwtToken);
    //     const decoded_jwtToken = jwt_decode(jwtToken);
    //     dispatch({
    //         type: SET_CURRENT_USER,
    //         payload: decoded_jwtToken
    //     });

    //     const currentTime = Date.now() / 1000;
    //     if (decoded_jwtToken.exp < currentTime) {
    //         dispatch(logout());
    //     }
    // }
