export const getProductList = () => {
    return fetch(`https://6356d5a99243cf412f8e9924.mockapi.io/api/products`, { method: 'GET' })
        .then((res) => res.json())
        .catch((e) => e);
};
