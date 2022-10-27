import { useState, useEffect } from 'react';
import { getProductList } from '~/components/Core/coreAPI';
import Footer from '~/components/Layout/common/Footer';
import ProductHome from '~/components/Layout/product/productHome';

const Product = () => {
    const [prdtList, setPrdtList] = useState([]);
    const [error, setError] = useState(false);

    const loadProductList = () => {
        getProductList().then((data) => {
            if (data.error) {
                setError(data.error);
                console.log('error');
            } else {
                setPrdtList(data);
                console.log(data);
            }
        });
    };

    const init = () => {
        loadProductList();
    };

    useEffect(() => {
        init();
    }, []);

    return (
        <>
            <ProductHome hidePO={true} prdtList={prdtList} />
            <Footer />
        </>
    );
};
export default Product;