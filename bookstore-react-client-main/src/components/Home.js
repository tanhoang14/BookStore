import { Layout, Row, Col, Carousel, Divider, Image, Card } from 'antd'
import '../App.css';
import libimg from '../assets/images/lib.jpg'
import libimg2 from '../assets/images/lib2.jpg'
import best_seller from '../assets/images/best_seller.png'
import directions from '../assets/images/directions.png'
import faq from '../assets/images/faq.png'

const Home = () => {
    const { Content } = Layout;

    const contentStyle = {
        height: '250px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79'
    }
    const cardImageStyle = {
        height: '200px'
    }

    return (
        <Content>
            <Row justify='space-around'>
                <Col span={24}>
                    <Carousel autoplay className='carousel'>
                        {/* <div style={contentStyle}>
                            <Image style={contentStyle} src={libimg3} />
                        </div> */}
                        <div>
                            <Image style={contentStyle} src={libimg2} width='100%' />
                        </div>
                        <div>
                            <Image style={contentStyle} src={libimg} />
                        </div>
                    </Carousel>
                </Col>
                {/* <Col span={8}>
                    <Image style={contentStyle} src={logo} />
                </Col> */}
            </Row>
            <Row justify='space-around'>
                <Col span={22}>
                    <Divider className='divider'></Divider>
                </Col>
            </Row>

            <Row justify='space-around' className='center'>
                <Col span={6}>
                    <figure>
                        <Image style={cardImageStyle} src={best_seller} />
                        <figcaption>BEST SELLER</figcaption>
                    </figure>
                </Col>
                <Col span={6}>
                    <figure>
                        <Image style={cardImageStyle} src={directions} />
                        <figcaption>DIRECTIONS</figcaption>
                    </figure>
                </Col>
                <Col span={6}>
                    <figure>
                        <Image style={cardImageStyle} src={faq} />
                        <figcaption>FAQ</figcaption>
                    </figure>
                </Col>
            </Row>
        </Content>
    )
}
export default Home;