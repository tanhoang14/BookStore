import { Layout, Form, Input, Select, Space, Row, Col } from 'antd'

import Options from '../../../utils/UI/UI_Constants'
import getOptions from '../../../utils/UI/SelectOptionsUtil'

import { getDefaultUserShipping } from '../../../actions/ShippingActions'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'

const ShippingAddress = () => {
    const dispatch = useDispatch()
    const [form] = Form.useForm()
    const { Content } = Layout
    const shippingInfo = useSelector(state => state.userShippings.defaultShipping)
    const { USstates } = Options

    useEffect(() => {
        dispatch(getDefaultUserShipping())
    }, [])

    useEffect(() => {
        form.resetFields()
    }, [shippingInfo])

    return (
        <Content>
            <Form form={form} layout='vertical' wrapperCol={{ span: 24 }} initialValues={shippingInfo}>
                <Row justify='start'>
                    <Col span={8}>
                        <Form.Item name='userShippingName' label='Name'><Input placeholder='Reciever Name'></Input></Form.Item>
                        <Form.Item name='userShippingStreet1' label='Street Address'><Input placeholder='Street Address 1'></Input></Form.Item>
                        <Form.Item name='userShippingStreet2' label=''><Input placeholder='Street Address 2'></Input></Form.Item>
                        <Space>
                            <Form.Item name='userShippingCity' label='Your City'><Input placeholder='Shipping City'></Input></Form.Item>
                            <Form.Item name='userShippingState' label='State'><Select placeholder='Select State'>{getOptions(USstates)}</Select></Form.Item>
                            <Form.Item name='userShippingZipcode' label='Zipcode'><Input placeholder='zipcode'></Input></Form.Item>

                        </Space>
                    </Col>
                </Row>
            </Form>
        </Content>
    )
}

export default ShippingAddress;