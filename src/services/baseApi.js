import axios from 'axios';

export default () => {
    const isProd = process.env.NODE_ENV === 'production'
    return axios.create({
        baseURL: isProd? `https://group-expenses.herokuapp.com/`: `http://localhost:3000/`
    })
}