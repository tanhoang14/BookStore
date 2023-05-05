import { Table, Space, Button, Empty, Popconfirm } from 'antd'
import { DeleteFilled, EditTwoTone, ShoppingTwoTone } from '@ant-design/icons'
import message from '../../common/message'
import GetImage from '../../common/GetImage'

import { Fragment, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import { getAllBook, deleteBook } from '../../../actions/bookActions'

const BookList = () => {

    const dispatch = useDispatch()
    const dataSource = useSelector(state => state.books.books)
    const errors = useSelector(state => state.error.errors)

    useEffect(() => {
        dispatch(getAllBook())
    }, [])

    useEffect(() => {
        if (errors.deleteBook) {
            message('error', errors.deleteBook)
        }
    }, [errors])


    const handleDeleteBook = (bookId) => {
        dispatch(deleteBook(bookId))
    }

    const columns = [
        {
            title: '',
            dataIndex: '',
            render: (text, record) => {
                return (<GetImage id={record.id} width='100px' height='100px'></GetImage>)
            }
        },
        {
            title: 'title',
            dataIndex: 'title',
            key: 'title'
        },
        {
            title: 'author',
            dataIndex: 'author',
            key: 'author'
        },
        {
            title: 'category',
            dataIndex: 'category',
            key: 'category'
        },
        {
            title: 'List Price',
            dataIndex: 'listPrice',
            key: 'listPrice'
        },
        {
            title: 'Our Price',
            dataIndex: 'ourPrice',
            key: 'ourPrice'
        },
        {
            title: 'active',
            dataIndex: 'active',
            render: (text, record) => {
                if (record.active)
                    return (<span>Yes</span>)
                else return (<span>No</span>)
            }
        },
        {
            title: 'operation',
            dataIndex: 'operation',
            render: (text, record) => {
                return (
                    <Space>
                        <Link to={`/updatebook/${record.id}`}><Button icon={<EditTwoTone />}></Button></Link>
                        <Popconfirm title={`Are you sure to delete ${record.title} ?`} onConfirm={() => { handleDeleteBook(record.id) }}>
                            <Button icon={<DeleteFilled />} danger></Button>
                        </Popconfirm>
                        <Link to={`/bookdetail/${record.id}`}><Button icon={<ShoppingTwoTone />}></Button></Link>
                    </Space>
                )
            }
        }
    ]

    let table = (Object.keys(dataSource).length != 0) ? <Table dataSource={dataSource} columns={columns} rowKey='id'></Table> : <Empty />

    return (
        <Fragment>
            <Link to={'/addbook'}><Button className='btn' type='primary'>Add New Book</Button></Link>
            {table}
        </Fragment>

    )
}
export default BookList