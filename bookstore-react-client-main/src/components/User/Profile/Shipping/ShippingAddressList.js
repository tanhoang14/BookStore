import { Button, Empty, Popconfirm, Space, Table } from 'antd'
import { EditTwoTone, DeleteFilled } from '@ant-design/icons'

import { useEffect, useState, Fragment } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import { getUserShipping, deleteUserShipping, setDefaultUserShipping } from '../../../../actions/ShippingActions'


const ShippingAddressList = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUserShipping())
    }, [])

    const dataSource = useSelector(state => state.userShippings.userShippings)
    const defaultShipping = useSelector(state => state.userShippings.defaultShipping)
    const [state, setState] = useState({ selectedRowKeys: [], })
    let selectedRowKeys;

    useEffect(() => {
        if (defaultShipping) {
            selectedRowKeys = [defaultShipping.id]
            setState({ selectedRowKeys })
        }

    }, [defaultShipping])

    const selectRow = (record) => {
        selectedRowKeys = []

        if (selectedRowKeys.indexOf(record.key) >= 0) {
            selectedRowKeys.splice(selectedRowKeys.indexOf(record.key), 1);
        } else {
            selectedRowKeys.push(record.key);
        }
        setState({ selectedRowKeys });
    }
    const onSelectedRowKeysChange = (selectedRowKeys) => {
        setState({ selectedRowKeys });
    }

    const handleSetDefaultShipping = () => {
        if (state.selectedRowKeys[0] != null)
            dispatch(setDefaultUserShipping(state.selectedRowKeys[0]))
    }

    const rowSelection = {
        columnTitle: (<Button className='btn' type='ghost' onClick={handleSetDefaultShipping}>Set Default Shipping</Button>),
        type: 'radio',
        selectedRowKeys: state.selectedRowKeys,
        onChange: onSelectedRowKeysChange,
    };

    const handleDelete = (id) => {
        dispatch(deleteUserShipping(id))
    }

    const columns = [
        {
            title: 'Name',
            dataIndex: 'userShippingName',
            key: 'userShippingName'
        },
        {
            title: 'street 1',
            dataIndex: 'userShippingStreet1',
            key: 'userShippingStreet1'
        },
        {
            title: 'city',
            dataIndex: 'userShippingCity',
            key: 'userShippingCity'
        },
        {
            title: 'state',
            dataIndex: 'userShippingState',
            key: 'userShippingState'
        },
        {
            title: 'operation',
            dataIndex: 'operation',
            render: (text, record) => {
                return (
                    <Space>
                        <Link to={`/UpdateUserShipping/${record.id}`}><Button icon={<EditTwoTone />}></Button></Link>
                        <Popconfirm title={`Are you sure to delete Shipping Addres ${record.userShippingStreet1}, ${record.userShippingCity}, ${record.userShippingState} ?`} onConfirm={() => { handleDelete(record.id) }}>
                            <Button icon={<DeleteFilled />} danger></Button>
                        </Popconfirm>
                    </Space>
                )
            }
        }
    ]

    let table = (Object.keys(dataSource).length != 0) ? <Table dataSource={dataSource} columns={columns} rowSelection={rowSelection} rowKey='id' onRow={(record) => ({
        onClick: () => {
            selectRow(record);
        },
    })}>
    </Table> : <Empty />


    return (
        <Fragment>
            <Link to={'/AddUserShipping'}><Button className='btn' type='primary'>Add Shipping Address</Button></Link>
            {table}
        </Fragment>

    )
}
export default ShippingAddressList