import { Row, Col, Typography, Card, Select, Space, Button, Divider } from 'antd'
import { ShoppingCartOutlined } from '@ant-design/icons'
import GetImage from '../../common/GetImage'
import getOptions from '../../../utils/UI/SelectOptionsUtil'

import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import MatchParams from '../../../utils/route/MatchRouteParams'

import { getBookDetail } from '../../../actions/bookActions'
import { addBookToCartItem } from '../../../actions/ShoppingCartActions'

const BookInfo = (props) => {

    let history = useHistory()
    const match = MatchParams(history, '/bookdetail/:id')

    const { id } = match.params

    const { Title, Text, Paragraph } = Typography
    const dispatch = useDispatch()

    const book = useSelector(state => state.books.detail)

    const [qty, setqty] = useState()

    useEffect(() => {
        dispatch(getBookDetail(id))
    }, [])

    const onChangeOption = (value) => {
        setqty(value)
    }

    const handleSubmit = () => {
        const data = { book: book, qty: qty }
        dispatch(addBookToCartItem(data, history))
    }

    return (
        <Row justify='space-between'>
            <Col xs={{ span: 24 }} xl={{ span: 6 }} offset={1}>
                <GetImage id={id} width='300px' height='300px'></GetImage>
            </Col>
            <Col xs={{ span: 24 }} xl={{ span: 16 }}>
                <Title>{book.title}</Title>
                <Divider></Divider>
                <Row justify='start'>
                    <Col xs={{ span: 12 }} xl={{ span: 6 }} className='block-text'>
                        <Text><strong>Author: </strong>{book.author}</Text>
                        <Text><strong>Publisher: </strong>{book.publisher}</Text>
                        <Text><strong>Publication Date: </strong>{book.publicationDate}</Text>
                        <Text><strong>Language: </strong>{book.language}</Text>
                        <Text><strong>Category: </strong>{book.category}</Text>
                        <Text><strong>Pages: </strong>{book.numberOfPages}</Text>
                    </Col>
                    <Col xs={{ span: 12 }} xl={{ span: 6 }} className='block-text'>
                        <Text><strong>Format: </strong>{book.format}</Text>
                        <Text><strong>ISBN: </strong>{book.isbn}</Text>
                        <Text><strong>Shipping Weight: </strong>{book.shippingWeight}</Text>
                        <Text><strong>List Price: </strong>{book.listPrice}</Text>
                        <Text><strong>Our Price: </strong>{book.ourPrice}</Text>
                        <Text><strong>Number in Stock: </strong>{book.inStockNumber}</Text>
                    </Col>
                    <Col span={8}>
                        <Card style={{ borderColor: '#57a8e9', outline: 0, boxShadow: '0 0 0 2px rgba(87,168,233, .2)' }} bordered={true} hoverable bodyStyle={{ backgroundColor: '#f0f5f5' }}>
                            <div>Our Price  {book.ourPrice}</div>
                            <div>List Price {book.listPrice}</div>
                            <div> You save  {(book.listPrice - book.ourPrice).toFixed(2)}</div>
                            <Divider></Divider>
                            <Space>
                                <Select onChange={onChangeOption} placeholder='Qty'>{getOptions([1, 2, 3, 4, 5, 6])}</Select>
                                <Button htmlType='submit' onClick={handleSubmit} icon={<ShoppingCartOutlined />} type='primary'>Add to cart</Button>
                            </Space>
                        </Card>
                    </Col>
                </Row>
                <Divider></Divider>
                <Text strong>{book.description}</Text>
            </Col>
        </Row>
    )
}
export default BookInfo;