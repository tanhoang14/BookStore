import axios from 'axios'
import urls from '../APIConfig'

const { BOOK_IMAGE_URL } = urls

const getImage = (id) => {
    return axios.get(BOOK_IMAGE_URL + id);
}

export default getImage;