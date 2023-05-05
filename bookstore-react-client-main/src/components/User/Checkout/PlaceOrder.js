import { Button } from 'antd'


import { Fragment } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom';

import { createOrder } from '../../../actions/OrderActions'
import ShoppingCart from '../ShoppingCart'

const PlaceOrder = (props) => {

    const history = useHistory()
    const dispatch = useDispatch()

    const handleCreateOrder = () => {
        dispatch(createOrder(history))
    }

    return (
        <Fragment>
            <Button type='primary' onClick={handleCreateOrder}>Place Order</Button>
            <ShoppingCart />
        </Fragment>
    )
}

export default PlaceOrder;