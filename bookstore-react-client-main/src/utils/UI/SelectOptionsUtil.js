import { Select } from 'antd'

const getOptions = (OptionList) => {
    const { Option } = Select
    const options = OptionList.map(option => {
        return (
            <Option value={option}>{option}</Option>
        )
    })
    return options;
}

export default getOptions