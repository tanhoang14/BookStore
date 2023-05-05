import { Table, Empty, Space, Button, Popconfirm } from 'antd'
import { EditTwoTone, DeleteFilled } from '@ant-design/icons'
import GetImage from '../common/GetImage'

import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { getShoppingCart, removeItem } from '../../actions/ShoppingCartActions'

const ShoppingCart = (props) => {

    const dispatch = useDispatch()
    const shoppingCart = useSelector(state => state.shoppingCart.shoppingCart)

    useEffect(() => {
        dispatch(getShoppingCart());
    }, [])

    const handleDelete = (id) => {
        dispatch(removeItem(id))
    }

    const columns = [
        {
            title: '',
            dataIndex: '',
            render: (text, record) => {
                return (<GetImage id={record.book.id} width='100px' height='100px'></GetImage>)
            }
        },
        {
            title: 'book title',
            dataIndex: 'book.title',
            render: (text, record) => {
                return record.book.title
            }
        },
        {
            title: 'category',
            dataIndex: 'book.category',
            render: (text, record) => {
                return record.book.category
            }
        },
        {
            title: 'language',
            dataIndex: 'book.language',
            render: (text, record) => {
                return record.book.language
            }
        },
        {
            title: 'price',
            dataIndex: 'book.ourPrice',
            render: (text, record) => {
                return record.book.ourPrice
            }
        },
        {
            title: 'qty',
            dataIndex: 'qty',
            render: (text, record) => {
                return record.qty
            }
        },
        {
            title: 'operation',
            dataIndex: 'operation',
            render: (text, record) => {
                return (
                    <Space>
                        <Button icon={<EditTwoTone />}></Button>
                        <Popconfirm title={'Are you sure to delete this item'} onConfirm={() => { handleDelete(record.id) }}>
                            <Button icon={<DeleteFilled />} danger></Button>
                        </Popconfirm>
                    </Space>
                )
            }
        }
    ]

    let table = (Object.keys(shoppingCart).length != 0) ? <Table dataSource={shoppingCart} columns={columns} rowKey='id'></Table> : <Empty />

    return (
        table
    )
}

export default ShoppingCart;