import { Image } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'
import getImage from '../../utils/UI/ImageUtils'
import { useEffect, useState } from 'react'

const GetImage = ({ id, width, height }) => {

    const [img, setimg] = useState()
    const [imageLoading, setImageLoading] = useState(true);

    useEffect(() => {
        getImage(id)
            .then(result => {
                console.log(result.data);
                setimg(result.data)
            })
    }, [])

    useEffect(() => {
        setImageLoading(false)
    }, [img])

    return (
        <Image src={imageLoading ? <LoadingOutlined /> : img} width={width} height={height}></Image>
    )
}

export default GetImage