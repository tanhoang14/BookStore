import { Tabs } from 'antd'

import OrderList from './Order/OrderList'
import CreditCardList from './Billing/CreditCardList'
import ShippingAddressList from './Shipping/ShippingAddressList'

const Profile = () => {
    const { TabPane } = Tabs

    return (
        <Tabs centered>
            <TabPane key={1} tab='Orders'><OrderList></OrderList></TabPane>
            <TabPane key={2} tab='Billing'><CreditCardList></CreditCardList></TabPane>
            <TabPane key={3} tab='Shipping'><ShippingAddressList></ShippingAddressList></TabPane>
        </Tabs>
    )
}
export default Profile;