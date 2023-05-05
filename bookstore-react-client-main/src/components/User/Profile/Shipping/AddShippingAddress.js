import { Layout, Form, Typography, Input, Select, Space, Divider, Row, Col, Button } from 'antd'

import Options from '../../../../utils/UI/UI_Constants'
import getOptions from '../../../../utils/UI/SelectOptionsUtil'

import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { addUserShipping } from '../../../../actions/ShippingActions'

const AddShippingAddress = () => {
    const history = useHistory()
    const dispatch = useDispatch()
    const [form] = Form.useForm()
    const { Title } = Typography
    const { Content } = Layout

    const { USstates } = Options

    const handleSubmit = () => {
        form.validateFields().then(values => {
            dispatch(addUserShipping(values, history))
        })
    }

    const handleCancel = () => {
        history.push('/ShippingList')
    }

    return (
        <Content>
            <Form form={form} layout='vertical' wrapperCol={{ span: 24 }} onFinish={handleSubmit}>
                <Row justify='space-around'>
                    <Col span={8}>
                        <Divider orientation='center'><Title level={5}>Shipping Address</Title></Divider>
                        <Form.Item name='userShippingName' label='Name'><Input placeholder='Reciever Name'></Input></Form.Item>
                        <Form.Item name='userShippingStreet1' label='Street Address'><Input placeholder='Street Address 1'></Input></Form.Item>
                        <Form.Item name='userShippingStreet2' label=''><Input placeholder='Street Address 2'></Input></Form.Item>
                        <Space>
                            <Form.Item name='userShippingCity' label='Your City'><Input placeholder='Shipping City'></Input></Form.Item>
                            <Form.Item name='userShippingState' label='State'><Select placeholder='Select State'>{getOptions(USstates)}</Select></Form.Item>
                        </Space>
                        <Form.Item name='userShippingZipcode' label='Zipcode'><Input placeholder='zipcode'></Input></Form.Item>
                        <Space>
                            <Button htmlType='submit' type='primary'>Submit</Button>
                            <Button htmlType='button' type='dashed' onClick={handleCancel}>Cancel</Button>
                        </Space>
                    </Col>
                </Row>
            </Form>
        </Content>
    )
}
export default AddShippingAddress