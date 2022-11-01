import Category from '../common/Category/category';
import Item from './item';

function ProductHome({ hidePO, prdtList, onClickLoadMore }) {
    let showPO = {
        display: 'block',
    };
    let invisiblePO = {
        display: 'none',
    };
    function hideProductOverview() {
        return hidePO == true ? invisiblePO : showPO;
    }

    return (
        <section className="bg0 p-t-23 p-b-140">
            <div className="container">
                <div className="p-b-10" style={hideProductOverview()}>
                    <h3 className="ltext-103 cl5">Product Overview</h3>
                </div>
                <Category />
                <div className="row isotope-grid">
                    <Item productsData={prdtList} />
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
