import axios from 'axios'

export const getData = async ()=>{
    const res = await axios.get('https://62da7717e56f6d82a76251ac.mockapi.io/products')
    const data = res.data
    return data
}
