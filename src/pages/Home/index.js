import { useState, useEffect } from 'react';
import { getProductList } from '~/components/Core/coreAPI';
import Bannner from '~/components/Layout/common/Banner';
import Footer from '~/components/Layout/common/Footer';
import Slider from '~/components/Layout/common/Slider';
import ProductHome from '~/components/Layout/product/productHome';

const Home = () => {
    let setClassNameBody = () => {
        document.body.classList.add('animsition');
    };

    const [prdtListState, setPrdtListState] = useState({
        products: [],
        page: 1,
    });
    const [error, setError] = useState(false);
    let limit = 4;

    useEffect(() => {
        init();
    }, [prdtListState.page]);

    const init = () => {
        loadProductList();
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
                }));
                console.log(data);
            }
        });
    };

    const loadMoreClick = () => {
        setPrdtListState((prevState) => ({
            products: prevState.products,
            page: prevState.page + 1,
        }));
    };

    //setClassNameBody();
    return (
        <>
            <Slider />
            <Bannner />
            <ProductHome hidePO={false} prdtList={prdtListState.products} onClickLoadMore={loadMoreClick} />
            <Footer />
        </>
    );
};
export default Home;
