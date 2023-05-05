import { matchPath } from 'react-router'

const match = (history, path) => {
    return matchPath(history.location.pathname, {
        path: path,
        exact: true,
        strict: false
    })
}

export default match