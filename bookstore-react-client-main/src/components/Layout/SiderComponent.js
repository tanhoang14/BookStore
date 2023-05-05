import { Layout, Menu } from 'antd';
import {
    UserOutlined, HomeOutlined, CreditCardOutlined, BookOutlined, PlusCircleOutlined, CheckOutlined, ReadOutlined, TagOutlined, ShoppingCartOutlined, ShoppingOutlined,
} from '@ant-design/icons';

import { Fragment } from 'react'
import { useSelector } from 'react-redux'
import { NavLink, useLocation } from 'react-router-dom'


const SiderComponent = () => {
    const { Sider } = Layout;
    const { SubMenu } = Menu
    const location = useLocation()
    const user = useSelector(state => state.security.user)
    const validToken = useSelector(state => state.security.validToken)


    let AdminBookMenu = (user && validToken && user.scopes === 'Role_ADMIN') ? (
        <SubMenu key="Books" icon={<ReadOutlined />} title="Books">
            <Menu.Item key="/booklist" icon={<BookOutlined />}><NavLink key='/booklist' to="/booklist">Available Books</NavLink></Menu.Item>
            <Menu.Item key="/addbook" icon={<PlusCircleOutlined />}><NavLink key='/addbook' to="/addbook">Add Book</NavLink></Menu.Item>
        </SubMenu>
    ) : <Fragment />

    let result = user && validToken ? (
        <Sider
            collapsible
            style={{
                left: 0,
                width: 200
            }}

        >
            <Menu theme="dark" mode="inline" selectedKeys={[location.pathname]}>
                <Menu.Item key='/books' icon={<HomeOutlined />} title="Home"><NavLink key='/books' to="/books">Home</NavLink></Menu.Item>
                <SubMenu key="Profile" icon={<UserOutlined />} title="Profile">
                    <Menu.Item key="/cardlist" icon={<CreditCardOutlined />}><NavLink key='/cardlist' to="/cardlist">Credit Cards</NavLink></Menu.Item>
                    <Menu.Item key="/ShippingList" icon={<HomeOutlined />}><NavLink key='/ShippingList' to="/ShippingList">Shipping</NavLink></Menu.Item>
                    <Menu.Item key="/orders" icon={<TagOutlined />}><NavLink key='/orders' to="/orders">Orders</NavLink></Menu.Item>
                </SubMenu>
                <SubMenu key="Checkout" icon={<CheckOutlined />} title="Checkout">
                    <Menu.Item key="/shoppingCart" icon={<ShoppingCartOutlined />}><NavLink key='/shoppingCart' to="/shoppingCart">Shopping Cart</NavLink></Menu.Item>
                    <Menu.Item key="/checkout" icon={<ShoppingOutlined />}><NavLink key='/checkout' to="/checkout">Place Order</NavLink></Menu.Item>
                </SubMenu>
                {AdminBookMenu}
            </Menu>
        </Sider>
    ) : <Fragment />;

    return (
        result
    )
}

export default SiderComponent;