import axios from "axios";

const URL = 'http://localhost:8000/api'

export async function getOrders(email = '', page = 1, size = 20) {
    const res = await axios.get(URL + '/orders', {
        params: {
            email,
            page,
            size
        }
    });
    return res.data;
}