import { Layout, Typography, Menu } from 'antd'
import { UserOutlined } from '@ant-design/icons'

import { Fragment } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, NavLink, useLocation } from 'react-router-dom'

import { logout } from '../../actions/securityActions'


const HeaderComponent = () => {
    const { Header } = Layout
    const { SubMenu } = Menu
    const location = useLocation()
    const dispatch = useDispatch()
    const user = useSelector(state => state.security.user)
    const validToken = useSelector(state => state.security.validToken)

    const handleLogout = () => {
        dispatch(logout())
        window.location.href = "/";
    }

    const publicMenu = (
        <Menu mode="horizontal" theme="dark" className='p-menu' selectedKeys={[location.pathname]}>
            <Menu.Item><NavLink key='/signup' to="/signup">Signup</NavLink></Menu.Item>
            <Menu.Item><NavLink key='/login' to="/login">Login</NavLink></Menu.Item>
        </Menu >
    );

    const userMenu = (
        <Fragment>
            <Menu mode='horizontal' theme='dark' selectedKeys={[location.pathname]}>
                <SubMenu key="SubMenu" title='Books'>
                    <Menu.Item><NavLink key='/books' to="/books">Book List</NavLink></Menu.Item>
                </SubMenu>
                <Menu mode='horizontal' theme='dark' className='menu'>
                    <Menu.Item><NavLink key='/payment' to="/payment">SHOPPING CART</NavLink></Menu.Item>
                    <Menu.Item><NavLink key='/profile' to="/profile">MY ACCOUNT</NavLink></Menu.Item>
                    <Menu.Item><Link><UserOutlined />{user.username}</Link></Menu.Item>
                    <Menu.Item><Link onClick={handleLogout}>Logout</Link></Menu.Item>
                </Menu>
            </Menu>
        </Fragment>
    );

    const adminMenu = (
        <Fragment>
            <Menu mode='horizontal' theme='dark' selectedKeys={[location.pathname]}>
                <SubMenu key="SubMenu" title='Books'>
                    <Menu.Item><NavLink to="/booklist">Book List</NavLink></Menu.Item>
                    <Menu.Item><NavLink to="/addbook">Add Book</NavLink></Menu.Item>
                </SubMenu>
                <Menu mode='horizontal' theme='dark' className='menu'>
                    <Menu.Item><NavLink key='/payment' to="/payment">SHOPPING CART</NavLink></Menu.Item>
                    <Menu.Item><NavLink key='/profile' to="/profile">MY ACCOUNT</NavLink></Menu.Item>
                    <Menu.Item><Link><UserOutlined />{user.username}</Link></Menu.Item>
                    <Menu.Item><Link onClick={handleLogout}>Logout</Link></Menu.Item>
                </Menu>
            </Menu>
        </Fragment>
    );

    let headerMenu;

    if (user && validToken && user.scopes === 'Role_ADMIN') {
        headerMenu = adminMenu;
    }
    else if (user && validToken && user.scopes === 'Role_USER') {
        headerMenu = userMenu
    }
    else {
        headerMenu = publicMenu;
    }

    return (
        <Header>
            <Typography level={5} className='htitle'>BOOK STORE</Typography>
            {headerMenu}
        </Header>
    )
}

export default HeaderComponent;