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

    //setClassNameBody();
    return (
        <>
            <Slider />
            <Bannner />
            <ProductHome hidePO={false} prdtList={prdtList} />
            <Footer />
        </>
    );
};
export default Home;
