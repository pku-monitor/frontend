import axios from 'axios';

const api = axios.create({
    baseURL: 'https://d8c0f54b-9942-4403-847f-36cff9afbc70.mock.pstmn.io'
})

export {api}