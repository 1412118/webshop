import Bannner from '~/components/Layout/common/Banner';
import Footer from '~/components/Layout/common/Footer';
import Slider from '~/components/Layout/common/Slider';
import ProductHome from '~/components/Layout/product/productHome';
const Home = () => {
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
