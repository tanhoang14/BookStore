import { Empty, List, Card, Rate, Tag } from 'antd'

import GetImage from '../../common/GetImage'
import UI_Constants from '../../../utils/UI/UI_Constants'

import { Fragment, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import { getAllBook } from '../../../actions/bookActions'

const BookList = () => {

    const { tagColors } = UI_Constants
    const dispatch = useDispatch()
    const dataSource = useSelector(state => state.books.books)

    useEffect(() => {
        dispatch(getAllBook())
    }, [])

    let bookList = (Object.keys(dataSource).length != 0) ?
        <List
            grid={{
                gutter: 12,
                xs: 1,
                sm: 2,
                md: 3,
                lg: 3,
                xl: 3,
                xxl: 3,
            }}
            dataSource={dataSource}
            renderItem={item => (
                <List.Item>
                    <Card
                        style={{ width: 300 }}
                        cover={
                            <GetImage id={item.id} height='250px'></GetImage>
                        }
                    >
                        <div><Link to={`/bookdetail/${item.id}`}><h4>{item.title}</h4></Link></div>
                        <Rate value={5}></Rate>
                        <div><Tag color={tagColors[item.category]}>{item.category}</Tag></div>
                        <h4 className="price">${item.ourPrice}</h4>
                    </Card>
                </List.Item>
            )}
        /> :
        <Empty />

    return (
        <Fragment>
            {bookList}
        </Fragment>

    )
}
export default BookList