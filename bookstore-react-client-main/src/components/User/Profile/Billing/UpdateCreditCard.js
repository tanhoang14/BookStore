import { Layout, Form, Typography, Input, Select, DatePicker, Space, Divider, Row, Col, Button } from 'antd'

import Options from '../../../../utils/UI/UI_Constants'
import getOptions from '../../../../utils/UI/SelectOptionsUtil'

import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import MatchParams from '../../../../utils/route/MatchRouteParams'

import { getCard, updateCard } from '../../../../actions/BillingActions'

import moment from 'moment'

const UpdateCreditCard = (props) => {
    let history = useHistory()
    const match = MatchParams(history, '/updatecardinfo/:id')
    const { id } = match.params
    const dispatch = useDispatch()
    const cardInfo = useSelector(state => state.cards.cardInfo)
    const [form] = Form.useForm()
    const [form1] = Form.useForm()
    const { Title } = Typography
    const { Content } = Layout

    const { creditCardTypes, USstates } = Options

    const [state, setstate] = useState({})

    useEffect(() => {
        dispatch(getCard(id))
    }, [])

    useEffect(() => {
        form.resetFields()
        // form.setFieldsValue({ 'expireDate': moment(cardInfo.expireDate) })
        form1.resetFields()
    }, [cardInfo])

    useEffect(() => {
        if (state.id != null && state.userBilling.id != null) {
            dispatch(updateCard(state, history))
        }
    }, [state])

    const handleSubmit = () => {
        form.validateFields().then(values => {
            // values.expireDate = values.expireDate ? values.expireDate.format('YYYY-MM-DD') : ''
            values.id = cardInfo.id
            form1.validateFields().then(values1 => {
                values1.id = cardInfo.userBilling.id
                setstate({
                    'cardName': values.cardName,
                    'cardNumber': values.cardNumber,
                    'cvc': values.cvc,
                    // 'expireDate': values.expireDate,
                    'holderName': values.holderName,
                    'id': values.id,
                    'type': values.type,
                    'userBilling': values1
                })
            })

            // form1.validateFields().then(values => {
            //     values.id = cardInfo.userBilling.id
            //     // setstate({'userBilling': values })

            //     setstate(prevState => {
            //         return { ...prevState, 'userBilling': values }
            //     })

            // })
        })
    }

    const handleCancel = () => {
        history.push('/cardlist')
    }

    return (
        <Content>
            <Row justify='space-around'>
                <Col span={8} offset={4}>
                    <Divider orientation='left'><Title level={5}>Credit Card Information</Title></Divider>
                    <Form form={form} layout='vertical' wrapperCol={{ span: 24 }} initialValues={cardInfo} onFinish={handleSubmit}>
                        <Form.Item name='cardName' label='Give a name for your card'><Input placeholder='Card Name'></Input></Form.Item>
                        <Form.Item name='type' label='Select Card Type'><Select>{getOptions(creditCardTypes)}</Select></Form.Item>
                        <Form.Item name='holderName' label='Card Holder'><Input placeholder='Card Holder Name'></Input></Form.Item>
                        <Form.Item name='cardNumber' label='Card Number'><Input placeholder='Valid Card Number'></Input></Form.Item>
                        {/* <Form.Item name='expireDate' label='expireDate'><DatePicker></DatePicker></Form.Item> */}

                        <Space>
                            <Form.Item name='cvc' label='CV Code'><Input></Input></Form.Item>
                        </Space>
                    </Form>
                </Col>
                <Col span={8}>
                    <Divider orientation='left'><Title level={5}>Billing Address</Title></Divider>
                    <Form form={form1} layout='vertical' wrapperCol={{ span: 24 }} initialValues={cardInfo.userBilling} onFinish={handleSubmit}>
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
                    </Form>
                </Col>
            </Row>
        </Content>
    )
}
export default UpdateCreditCard