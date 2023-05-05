import { Form, Input, InputNumber, Button, Select, Space, Radio, Upload } from 'antd'
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons'
import message from '../../common/message'

import Options from '../../../utils/UI/UI_Constants'
import getOptions from '../../../utils/UI/SelectOptionsUtil';
import getImage from '../../../utils/UI/ImageUtils'

import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import MatchParams from '../../../utils/route/MatchRouteParams'

import { getBookDetail, createNewBook } from '../../../actions/bookActions'

import moment from 'moment'


const UpdateBook = (props) => {

    let history = useHistory()
    const match = MatchParams(history, '/updatebook/:id')

    const { id } = match.params
    const [form] = Form.useForm()

    const { category, format, language } = Options

    const [imageLoading, setImageLoading] = useState(false);
    const [imageBase64Value, setImageBase64Value] = useState(null);
    const [img, setimg] = useState()
    const dispatch = useDispatch()
    const book = useSelector(state => state.books.detail)
    const errors = useSelector(state => state.error.errors)


    useEffect(() => {
        getImage(id)
            .then(result => {
                setimg([{ url: result.data }])
                setImageBase64Value(result.data)
            })
        dispatch(getBookDetail(id))
    }, [])

    useEffect(() => {
        if (Object.keys(book).length != 0) {
            // book.publicationDate = moment(book.publicationDate)
            form.resetFields()
            // form.setFieldsValue({ 'publicationDate': moment(book.publicationDate) })
        }
    }, [book])

    useEffect(() => {
        if (errors.getBookDetail) {
            message('error', errors.getBookDetail)
        }
    }, [errors])

    const handleUpdate = () => {
        form.validateFields()
            .then(values => {
                // values['publicationDate'] = values['publicationDate'] ? values['publicationDate'].format('YYYY-MM-DD') : ''
                values['bookImage'] = imageBase64Value
                values.id = book.id
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
            //   displayErrorMessage("You're only able to upload valid JPG or PNG files!");
            return false;
        }

        if (!fileIsValidSize) {
            //   displayErrorMessage(
            //     "You're only able to upload valid image files of under 1MB in size!"
            //   );
            return false;
        }

        return fileIsValidImage && fileIsValidSize;
    };


    return (
        <Form form={form} initialValues={book} onFinish={handleUpdate} wrapperCol={{ span: 8 }} labelCol={{ span: 8 }}>
            <Form.Item name='title' label='title'><Input></Input></Form.Item>
            <Form.Item name='author' label='author'><Input></Input></Form.Item>
            <Form.Item name='publisher' label='publisher'><Input></Input></Form.Item>
            {/* <Form.Item name='publicationDate' label='publicationDate'><DatePicker  dateFormatCalendar=""></DatePicker></Form.Item> */}
            <Form.Item name='language' label='language'>
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
                    fileList={img}
                    // showUploadList={false}
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
export default UpdateBook;