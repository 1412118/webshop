import { useState, useEffect } from 'react';
import { getProductList } from '~/components/Core/coreAPI';
import Footer from '~/components/Layout/common/Footer';
import ProductHome from '~/components/Layout/product/productHome';

const Product = () => {
    /*let limit = 4;

    const [prdtListState, setPrdtListState] = useState({
        products: [],
        page: 1,
        curHeight: 200,
    });

    const [error, setError] = useState(false);

    useEffect(() => {
        loadProductList();
    }, [prdtListState.page]);

    window.onscroll = () => handleScroll();

    const handleScroll = () => {
        console.log(window.pageYOffset);
        if (window.pageYOffset >= prdtListState.curHeight) {
            setPrdtListState((prevState) => ({
                products: prevState.products,
                page: prevState.page + 1,
                curHeight: prevState.curHeight + 200,
            }));
        }
    };

    const loadProductList = () => {
        getProductList(prdtListState.page, limit).then((data) => {
            if (data.error) {
                setError(data.error);
                console.log('error');
            } else {
                setPrdtListState((prevState) => ({
                    products: prevState.products.concat(data),
                    page: prevState.page,
                    curHeight: prevState.curHeight,
                }));
                console.log(data);
            }
        });
    };*/

    return (
        <>
            <ProductHome hidePO={true} />
            <Footer />
        </>
    );
};
export default Product;
