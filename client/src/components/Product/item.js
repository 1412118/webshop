import { Link } from 'react-router-dom';
import { dataProducts } from './dataProducts';
import './product.css';

function Item({ productsData }) {
    //console.log(dataProducts[0].img);
    console.log(productsData);
    let imgUrl = 'images/product/';
    return productsData.map((obj, index) => {
        return (
            <div key={obj.sku} className="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item women">
                <div className="block2">
                    <div className="block2-pic hov-img0">
                        <img src={imgUrl + obj.image} alt="IMG-PRODUCT" />

                        <Link
                            to="#"
                            className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1"
                        >
                            Quick View
                        </Link>
                    </div>

                    <div className="block2-txt flex-w flex-t p-t-14">
                        <div className="block2-txt-child1 flex-col-l ">
                            <Link
                                to={`/product/${obj.sku}`}
                                className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6"
                            >
                                {obj.product_name}
                            </Link>

                            <span className="stext-105 cl3">{'$' + `${obj.price}`}</span>
                        </div>

                        <div className="block2-txt-child2 flex-r p-t-3">
                            <Link to="#" className="btn-addwish-b2 dis-block pos-relative js-addwish-b2">
                                <img
                                    className="icon-heart1 dis-block trans-04"
                                    src={require('~/assets/images/icons/icon-heart-01.png')}
                                    alt="ICON"
                                />
                                <img
                                    className="icon-heart2 dis-block trans-04 ab-t-l"
                                    src={require('~/assets/images/icons/icon-heart-02.png')}
                                    alt="ICON"
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    });
}

export default Item;
