import { Tabs } from 'antd'

import ShoppingCart from './ShoppingCart'
import Checkout from './Checkout/Checkout'

const Payment = () => {
    const { TabPane } = Tabs

    return (
        <Tabs centered>
            <TabPane key={1} tab='Shopping Cart'><ShoppingCart></ShoppingCart></TabPane>
            <TabPane key={2} tab='Checkout'><Checkout></Checkout></TabPane>
        </Tabs>
    )
}
export default Payment;