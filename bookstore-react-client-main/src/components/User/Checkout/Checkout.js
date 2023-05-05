import { Collapse } from 'antd';
import ShippingAddress from './ShippingAddress'
import PaymentInformation from './PaymentInformation';
import PlaceOrder from './PlaceOrder';

const Checkout = () => {
    const { Panel } = Collapse
    return (
        <Collapse defaultActiveKey='3' accordion>
            <Panel header='Shipping Address' key='1'><ShippingAddress></ShippingAddress></Panel>
            <Panel header='Payment Information' key='2'><PaymentInformation></PaymentInformation></Panel>
            <Panel header='Review items and Shipping' key='3' ><PlaceOrder></PlaceOrder></Panel>
        </Collapse>
    )
}

export default Checkout;