import { Layout, Form, Input, Select, DatePicker, Space, Row, Col } from 'antd'

import Options from '../../../utils/UI/UI_Constants'
import getOptions from '../../../utils/UI/SelectOptionsUtil'

import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { getDefaultCard } from '../../../actions/BillingActions'

import moment from 'moment'

const PaymentInformation = () => {
    const dispatch = useDispatch()
    const cardInfo = useSelector(state => state.cards.defaultCard)
    const { creditCardTypes } = Options
    const [form] = Form.useForm()
    const { Content } = Layout


    useEffect(() => {
        dispatch(getDefaultCard())
    }, [])

    useEffect(() => {
        form.resetFields()
        // form.setFieldsValue({ 'expireDate': moment(cardInfo.expireDate) })
    }, [cardInfo])

    return (
        <Content>
            <Form form={form} layout='vertical' wrapperCol={{ span: 24 }} initialValues={cardInfo}>
                <Row justify='start'>
                    <Col span={8}>
                        <Space>
                            <Form.Item name='cardName' label='Card Name'><Input placeholder='Card Name'></Input></Form.Item>
                            <Form.Item name='type' label='Card Type'><Select>{getOptions(creditCardTypes)}</Select></Form.Item>
                        </Space>
                        <Space>
                            <Form.Item name='holderName' label='Card Holder'><Input placeholder='Card Holder Name'></Input></Form.Item>
                            <Form.Item name='cardNumber' label='Card Number'><Input placeholder='Valid Card Number'></Input></Form.Item>
                        </Space>
                        <Space>
                            <Form.Item name='cvc' label='CV Code'><Input></Input></Form.Item>
                            {/* <Form.Item name='expireDate' label='expireDate'><DatePicker></DatePicker></Form.Item> */}
                        </Space>
                    </Col>
                </Row>
            </Form>
        </Content>
    )
}

export default PaymentInformation;