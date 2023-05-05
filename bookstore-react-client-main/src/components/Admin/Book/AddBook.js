import { Form, Input, InputNumber, Button, DatePicker, Select, Space, Radio, Upload } from 'antd'
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons'

import Options from '../../../utils/UI/UI_Constants'
import getOptions from '../../../utils/UI/SelectOptionsUtil';

import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from "react-router-dom";

import { createNewBook } from '../../../actions/bookActions'


const AddBook = () => {
    let history = useHistory();
    const dispatch = useDispatch()
    const [imageLoading, setImageLoading] = useState(false);
    const [imageBase64Value, setImageBase64Value] = useState(null);
    const [form] = Form.useForm()
    const { category, format, language } = Options

    const handleSubmit = () => {
        form.validateFields()
            .then(values => {
                values['publicationDate'] = values['publicationDate'] ? values['publicationDate'].format('YYYY-MM-DD') : ''
                values['bookImage'] = imageBase64Value
                dispatch(createNewBook(values, history))
            })
    }

    const handleCancel = () => {
        history.push('/booklist')
    }

    const handleImageUpload = (info) => {
        const { file } = info;

        if (file.status === "uploading") {
            setImageLoading(true);
            return;
        }

        if (file.originFileObj) {
            getBase64Value(file.originFileObj, imageBase64Value => {
                setImageBase64Value(imageBase64Value);
                setImageLoading(false);
            });
        }
    };

    const getBase64Value = (img, callback) => {
        const reader = new FileReader();
        reader.readAsDataURL(img);
        reader.onload = () => {
            callback(reader.result);
        };
    };

    const beforeImageUpload = (file) => {
        const fileIsValidImage = file.type === "image/jpeg" || file.type === "image/png";
        const fileIsValidSize = file.size / 1024 / 1024 < 1;

        if (!fileIsValidImage) {
            return false;
        }

        if (!fileIsValidSize) {
            return false;
        }

        return fileIsValidImage && fileIsValidSize;
    };

    return (
        <Form form={form} onFinish={handleSubmit} wrapperCol={{ span: 8 }} labelCol={{ span: 8 }}>
            <Form.Item name='title' label='title'><Input></Input></Form.Item>
            <Form.Item name='author' label='author'><Input></Input></Form.Item>
            <Form.Item name='publisher' label='publisher'
            ><Input></Input></Form.Item>
            <Form.Item name='publicationDate' label='publicationDate'><DatePicker></DatePicker></Form.Item>
            <Form.Item name='language' label='language'
            rules={[
          {
            required: true,
            message: 'Language is required !',
    
          },
        ]}
            >
                <Select>
                    {
                        getOptions(language)
                    }
                </Select>
            </Form.Item>
            <Form.Item name='category' label='category'>
                <Select>
                    {
                        getOptions(category)
                    }
                </Select>
            </Form.Item>
            <Form.Item name='numberOfPages' label='numberOfPages'><InputNumber></InputNumber></Form.Item>
            <Form.Item name='format' label='format'>
                <Select>
                    {
                        getOptions(format)
                    }
                </Select>
            </Form.Item>
            <Form.Item name='isbn' label='isbn'><Input></Input></Form.Item>
            <Form.Item name='shippingWeight' label='shippingWeight'><Input></Input></Form.Item>
            <Form.Item name='listPrice' label='listPrice'><InputNumber></InputNumber></Form.Item>
            <Form.Item name='ourPrice' label='ourPrice'><InputNumber></InputNumber></Form.Item>
            <Form.Item name='inStockNumber' label='inStockNumber'><InputNumber></InputNumber></Form.Item>
            <Form.Item name='bookImage' label='upload book image'>
                <Upload.Dragger
                    maxCount={1}
                    name="bookImage"
                    listType="picture-card"
                    action="#"
                    beforeUpload={beforeImageUpload}
                    onChange={handleImageUpload}>

                    <p className="ant-upload-drag-icon">
                        {imageLoading ? <LoadingOutlined /> : <PlusOutlined />}
                    </p>
                    <p className="ant-upload-text">Click or drag image to this area to upload</p>
                </Upload.Dragger>
            </Form.Item>
            <Form.Item name='description' label='description'><Input.TextArea></Input.TextArea></Form.Item>
            <Form.Item name='active' label='active'>
                <Radio.Group>
                    <Radio value={true}>Active</Radio>
                    <Radio value={false}>Inactive</Radio>
                </Radio.Group>
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 8 }}>
                <Space>
                    <Button htmlType='submit' type='primary'>Submit</Button>
                    <Button htmlType='button' type='dashed' onClick={handleCancel}>Cancel</Button>
                </Space>
            </Form.Item>
        </Form>
    )
}
export default AddBook;