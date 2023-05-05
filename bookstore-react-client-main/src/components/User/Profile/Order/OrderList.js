import { Table, Empty, Row, Col } from 'antd'

import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { getOrders } from '../../../../actions/OrderActions'

const OrderList = (props) => {

    const dispatch = useDispatch()
    const orders = useSelector(state => state.orders.orders)

    useEffect(() => {
        dispatch(getOrders());
    }, [])

    const columns = [
        {
            title: 'Order Date',
            dataIndex: 'orderDate',
            render: (text, record) => {
                return String(record.orderDate).split('T')[0]
            }
        },
        {
            title: 'Shipping Method',
            dataIndex: 'shippingMethod',
            key: 'shippingMethod'
        },
        {
            title: 'Total',
            dataIndex: 'orderTotal',
            key: 'orderTotal'
        },
        {
            title: 'Order Status',
            dataIndex: 'orderStatus',
            key: 'orderStatus'
        },
    ]

    let table = (Object.keys(orders).length != 0) ? <Table justify='centered' dataSource={orders} columns={columns} rowKey='id'></Table> : <Empty />

    return (
        <Row justify='space-around'>
            <Col span={22}>
                {table}
            </Col>
        </Row>
    )
}

export default OrderList;