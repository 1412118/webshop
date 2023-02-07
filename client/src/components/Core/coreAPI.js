import axios from 'axios';

const coreAPI = {
    getProductList(page, limit) {
        return axios
            .get(`https://6356d5a99243cf412f8e9924.mockapi.io/api/products?page=${page}&limit=${limit}`)
            .then((res) => res.data)
            .catch((e) => e);

        // return fetch(`https://6356d5a99243cf412f8e9924.mockapi.io/api/products?page=${page}&limit=${limit}`, {
        //     method: "GET"
        // })
        // .then((res) => res.json())
        // .catch((e) => e);
    },

    register(user) {
        return axios
            .post(`http://localhost:5001/api/auth/register`, user)
            .then((res) => res.data)
            .catch((e) => e);
    },

    login(user) {
        return axios
            .post(`http://localhost:5001/api/auth/login`, user)
            .then((res) => res.data)
            .catch((e) => e);
    },
};

export default coreAPI;
