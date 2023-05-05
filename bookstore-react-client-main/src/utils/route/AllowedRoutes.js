import { intersection } from 'lodash';
import { useSelector } from "react-redux";
import { useEffect } from 'react'

const isArrayWithLength = (arr) => {
    return (Array.isArray(arr) && arr.length)
}

const AllowedRoutes = (routes) => {
    const security = useSelector(state => state.security.user.scopes)

    useEffect(() => {

    }, [security])

    const roles = [security];

    return routes.filter(({ permission }) => {
        if (!permission) return true;
        else if (!isArrayWithLength(permission)) return true;
        else return intersection(permission, roles).length;
    });
}
export default AllowedRoutes