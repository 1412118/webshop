import { useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Bannner from '~/components/Layout/common/Banner';
import Footer from '~/components/Layout/common/Footer';
import Slider from '~/components/Layout/common/Slider';
import ProductHome from '~/components/Layout/product/productHome';
import Context from '~/store/Context';
const Home = () => {
    /*let setClassNameBody = () => {
        document.body.classList.add('animsition');
    };

    setClassNameBody();*/
    const { productOverview, setProductOverview } = useContext(Context);
    useEffect(() => {
        setProductOverview(false);
    }, []);
    return (
        <>
            <Slider />
            <Bannner />
            <ProductHome />
            <Footer />
        </>
    );
};
export default Home;
