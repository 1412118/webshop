import { useState, useEffect, useContext } from 'react';
import { getProductList } from '~/components/Core/coreAPI';
import Context from '~/store/Context';
import Category from '../common/Category/category';
import Item from './item';

function ProductHome() {
    const { productOverview } = useContext(Context);
    function hideProductOverview() {
        return productOverview === true
            ? {
                  display: 'none',
              }
            : {
                  display: 'block',
              };
    }

    const [prdtListState, setPrdtListState] = useState({
        products: [],
        page: 1,
        curHeight: 200,
    });
    const [error, setError] = useState(false);
    let limit = 4;

    useEffect(() => {
        init();
    }, [prdtListState.page]);

    const init = () => {
        loadProductList();
    };

    // window.onscroll = () => handleScroll();

    // const handleScroll = () => {
    //     console.log(window.pageYOffset);
    //     if (window.pageYOffset >= prdtListState.curHeight) {
    //         setPrdtListState((prevState) => ({
    //             products: prevState.products,
    //             page: prevState.page + 1,
    //             curHeight: prevState.curHeight + 200,
    //         }));
    //     }
    // };

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
    };

    const onClickLoadMore = () => {
        setPrdtListState((prevState) => ({
            products: prevState.products,
            page: prevState.page + 1,
            curHeight: prevState.curHeight,
        }));
    };

    return (
        <section className="bg0 p-t-23 p-b-140">
            <div className="container">
                <div className="p-b-10" style={hideProductOverview()}>
                    <h3 className="ltext-103 cl5">Product Overview</h3>
                </div>
                <Category />
                <div className="row isotope-grid">
                    <Item productsData={prdtListState.products} />
                </div>
                <div className="flex-c-m flex-w w-full p-t-45">
                    <button
                        className="flex-c-m stext-101 cl5 size-103 bg2 bor1 hov-btn1 p-lr-15 trans-04"
                        onClick={onClickLoadMore}
                    >
                        Load More
                    </button>
                </div>
            </div>
        </section>
    );
}

export default ProductHome;
