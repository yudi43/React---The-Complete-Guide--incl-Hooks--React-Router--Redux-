import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger.firebaseio.com/'
});

export default instance;