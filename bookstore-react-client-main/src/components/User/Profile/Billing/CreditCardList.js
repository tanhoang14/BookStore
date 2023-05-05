import { Button, Empty, Popconfirm, Space, Table } from 'antd'
import { EditTwoTone, DeleteFilled } from '@ant-design/icons'

import { useEffect, useState, Fragment } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import { cardList, deletCard, setDefaultCard } from '../../../../actions/BillingActions'


const CreditCardList = () => {

    const dispatch = useDispatch()
    const dataSource = useSelector(state => state.cards.cards)
    const defaultCard = useSelector(state => state.cards.defaultCard)
    const [state, setState] = useState({ selectedRowKeys: [], })
    let selectedRowKeys;

    useEffect(() => {
        dispatch(cardList())
    }, [])

    useEffect(() => {
        if (defaultCard) {
            selectedRowKeys = [defaultCard.id]
            setState({ selectedRowKeys })
        }
    }, [defaultCard])



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

    const handleSetDefaultCard = () => {
        if (state.selectedRowKeys[0] != null)
            dispatch(setDefaultCard(state.selectedRowKeys[0]))
    }

    const rowSelection = {
        columnTitle: (<Button className='btn' type='ghost' onClick={handleSetDefaultCard}>Set Default Card</Button>),
        type: 'radio',
        selectedRowKeys: state.selectedRowKeys,
        onChange: onSelectedRowKeysChange,
    };

    const handleDeleteCreditCard = (id) => {
        dispatch(deletCard(id))
    }


    const columns = [
        {
            title: 'Credit Card',
            dataIndex: 'cardName',
            key: 'cardName'
        },
        {
            title: 'cardNumber',
            dataIndex: 'cardNumber',
            key: 'cardNumber'
        },
        {
            title: 'type',
            dataIndex: 'type',
            key: 'type'
        },
        {
            title: 'operation',
            dataIndex: 'operation',
            render: (text, record) => {
                return (
                    <Space>
                        <Link to={`/updatecardinfo/${record.id}`}><Button icon={<EditTwoTone />}></Button></Link>
                        <Popconfirm title={`Are you sure to delete Cerdit Card ${record.cardName} ?`} onConfirm={() => { handleDeleteCreditCard(record.id) }}>
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
            <Link to={'/AddCreditCard'}><Button className='btn' type='primary'>Add New Card</Button></Link>
            {table}
        </Fragment>
    )
}
export default CreditCardList