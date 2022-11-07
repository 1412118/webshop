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

    //setClassNameBody();
    return (
        <>
            <Slider />
            <Bannner />
            <ProductHome hidePO={false} />
            <Footer />
        </>
    );
};
export default Home;
