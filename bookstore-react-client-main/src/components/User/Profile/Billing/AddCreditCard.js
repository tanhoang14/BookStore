import { Layout, Form, Typography, Input, Select, DatePicker, Space, Divider, Row, Col, Button } from 'antd'

import Options from '../../../../utils/UI/UI_Constants'
import getOptions from '../../../../utils/UI/SelectOptionsUtil'

import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { newCard } from '../../../../actions/BillingActions'

const AddCreditCard = () => {
    let history = useHistory();
    const dispatch = useDispatch()
    const [form] = Form.useForm()
    const { Title } = Typography
    const { Content } = Layout
    const { creditCardTypes, USstates } = Options

    const handleSubmit = () => {
        form.validateFields().then(values => {
            values.expireDate = values.expireDate ? values.expireDate.format('YYYY-MM-DD') : ''
            dispatch(newCard(values, history))
        })
    }
    const handleCancel = () => {
        history.push('/cardlist')
    }


    return (
        <Content>
            <Form form={form} layout='vertical' wrapperCol={{ span: 24 }} onFinish={handleSubmit}>
                <Row justify='space-around'>
                    <Col span={8} offset={4}>
                        <Divider orientation='left'><Title level={5}>Credit Card Information</Title></Divider>
                        <Form.Item name='cardName' label='Give a name for your card'><Input placeholder='Card Name'></Input></Form.Item>
                        <Form.Item name='type' label='Select Card Type'><Select>{getOptions(creditCardTypes)}</Select></Form.Item>
                        <Form.Item name='holderName' label='Card Holder'><Input placeholder='Card Holder Name'></Input></Form.Item>
                        <Form.Item name='cardNumber' label='Card Number'><Input placeholder='Valid Card Number'></Input></Form.Item>
                        <Space>
                            <Form.Item name='expireDate' label='Expiration Date'><DatePicker placeholder='Select Exp Date'></DatePicker></Form.Item>
                            <Form.Item name='cvc' label='CV Code'><Input></Input></Form.Item>
                        </Space>
                    </Col>
                    <Col span={8}>
                        <Divider orientation='left'><Title level={5}>Billing Address</Title></Divider>
                        <Form.Item name='userBillingName' label='Name'><Input placeholder='Reciever Name'></Input></Form.Item>
                        <Form.Item name='userBillingStreet1' label='Street Address'><Input placeholder='Street Address 1'></Input></Form.Item>
                        <Form.Item name='userBillingStreet2' label=''><Input placeholder='Street Address 2'></Input></Form.Item>
                        <Space>
                            <Form.Item name='userBillingCity' label='Your City'><Input placeholder='Billing Shipping Address City'></Input></Form.Item>
                            <Form.Item name='userBillingState' label='State'><Select placeholder='Select State'>{getOptions(USstates)}</Select></Form.Item>
                        </Space>
                        <Form.Item name='userBillingZipcode' label='Zipcode'><Input placeholder='zipcode'></Input></Form.Item>
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
export default AddCreditCard