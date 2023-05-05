import { Layout } from 'antd'
import { Switch, Router } from 'react-router-dom'

import PrivateRoutes from '../../utils/route/PrivateRoutes'
import history from '../../utils/route/history'
import HeaderComponent from './HeaderComponent'
import SiderComponent from './SiderComponent';

import { useDispatch } from 'react-redux'

import types from '../../utils/ActionTypes'
import jwt_decode from "jwt-decode";
import setJwt from '../../utils/security/setJwt'
import { logout } from '../../actions/securityActions'

const RouteComponent = (props) => {
    const { Content } = Layout
    const { SET_CURRENT_USER } = types
    const jwtToken = localStorage.jwtToken;
    const dispatch = useDispatch()

    if (jwtToken) {
        setJwt(jwtToken);
        const decoded_jwtToken = jwt_decode(jwtToken);

        dispatch({
            type: SET_CURRENT_USER,
            payload: decoded_jwtToken
        });

        const currentTime = Date.now() / 1000;
        if (decoded_jwtToken.exp < currentTime) {
            dispatch(logout());
        }
    }

    return (
        <Router history={history}>
            <Layout>
                <HeaderComponent></HeaderComponent>
                <Layout>
                    <SiderComponent></SiderComponent>
                    <Layout>
                        <Switch>
                            <Content style={{
                                padding: 12,
                                margin: 0
                            }}>
                                <PrivateRoutes></PrivateRoutes>
                            </Content>
                        </Switch>
                    </Layout>
                </Layout>
            </Layout>
        </Router>
    )
}

export default RouteComponent;