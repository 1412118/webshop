import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Banner.module.scss';

import { dataBanner } from './dataBanner';

const cx = classNames.bind(styles);

function Bannner() {
    return (
        <div className={cx('sec-banner', 'bg0', 'p-t-80', 'p-b-50')}>
            <div className="container">
                <div className="row">
                    {dataBanner.map((obj, index) => {
                        return (
                            <div key={obj.id} className="col-md-6 col-xl-4 p-b-30 m-lr-auto">
                                <div className={cx('block1', 'wrap-pic-w')}>
                                    <img src={obj.img} alt="IMG-BANNER" />
                                    <Link
                                        to="product.html"
                                        className={
                                            cx('block1-txt') +
                                            ' ab-t-l s-full flex-col-l-sb p-lr-38 p-tb-34 trans-03 respon3'
                                        }
                                    >
                                        <div className={cx('block1-txt-child1') + ' flex-col-l'}>
                                            <span className={cx('block1-name') + ' ltext-102 trans-04 p-b-8'}>
                                                {obj.collection}
                                            </span>

                                            <span className={cx('block1-info') + ' stext-102 trans-04'}>
                                                {obj.type}
                                            </span>
                                        </div>

                                        <div className={cx('block1-txt-child2') + ' p-b-4 trans-05'}>
                                            <div className={cx('block1-link') + ' stext-101 cl0 trans-09'}>
                                                Shop Now
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default Bannner;
