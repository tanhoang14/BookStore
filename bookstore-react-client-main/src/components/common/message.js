import { message } from 'antd'

export default (type, m) => {
    switch (type) {
        case 'error':
            return message.error(m)

        default:
            break;
    }
}