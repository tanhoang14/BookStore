import Roles from '../security/Roles'

import AddBook from '../../components/Admin/Book/AddBook'
import BookList from '../../components/Admin/Book/BookList'
import UserBookList from '../../components/User/Book/BookList'
import UpdateBook from '../../components/Admin/Book/UpdateBook'

import BookInfo from '../../components/User/Book/BookInfo'
import AddCreditCard from '../../components/User/Profile/Billing/AddCreditCard'
import CreditCardList from '../../components/User/Profile/Billing/CreditCardList'
import UpdateCreditCard from '../../components/User/Profile/Billing/UpdateCreditCard'
import AddShippingAddress from '../../components/User/Profile/Shipping/AddShippingAddress'
import ShippingAddressList from '../../components/User/Profile/Shipping/ShippingAddressList'
import UpdateShippingAddress from '../../components/User/Profile/Shipping/UpdateShippingAddress'
import ShoppingCart from '../../components/User/ShoppingCart'
import Checkout from '../../components/User/Checkout/Checkout'
import Profile from '../../components/User/Profile/Profile'
import Payment from '../../components/User/Payment'
import Home from '../../components/Home';
import OrderList from '../../components/User/Profile/Order/OrderList'

export default [
    {
        component: AddBook,
        path: 'addbook',
        title: '',
        exact: true,
        permission: [
            Roles.Role_ADMIN,
        ]
    },
    {
        component: BookList,
        path: 'booklist',
        title: '',
        permission: [
            Roles.Role_ADMIN,
        ]
    },
    {
        component: UpdateBook,
        path: 'updatebook/:id',
        title: '',
        permission: [
            Roles.Role_ADMIN,
        ]
    },
    {
        component: UserBookList,
        path: 'books',
        title: ''
    },
    {
        component: BookInfo,
        path: 'bookdetail/:id',
        title: ''
    },
    {
        component: AddCreditCard,
        path: 'AddCreditCard',
        title: ''
    },
    {
        component: CreditCardList,
        path: 'cardlist',
        title: ''
    },
    {
        component: UpdateCreditCard,
        path: 'updatecardinfo/:id',
        title: ''
    },
    {
        component: AddShippingAddress,
        path: 'AddUserShipping',
        title: ''
    },
    {
        component: ShippingAddressList,
        path: 'ShippingList',
        title: ''
    },
    {
        component: UpdateShippingAddress,
        path: 'UpdateUserShipping/:id',
        title: ''
    },
    {
        component: ShoppingCart,
        path: 'shoppingCart',
        title: ''
    },
    {
        component: Checkout,
        path: 'checkout',
        title: ''
    },
    {
        component: Profile,
        path: 'profile',
        title: ''
    },
    {
        component: Payment,
        path: 'payment',
        title: ''
    },
    {
        component: OrderList,
        path: 'orders',
        title: ''
    },
    {
        component: Home,
        path: '',
        title: ''
    }

]