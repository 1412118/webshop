import { Link } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import BtnSlider from './BtnSlider';

import classNames from 'classnames/bind';
import styles from './Slider.module.scss';

import { dataSlider } from './dataSlider';

const cx = classNames.bind(styles);
const delay = 10000;

function Slider() {
    const [slideIndex, setSlideIndex] = useState(0);

    const nextSlide = () => {
        if (slideIndex !== dataSlider.length - 1) {
            setSlideIndex(slideIndex + 1);
        } else if (slideIndex === dataSlider.length - 1) {
            setSlideIndex(0);
        }
    };

    const prevSlide = () => {
        if (slideIndex !== 0) {
            setSlideIndex(slideIndex - 1);
        } else if (slideIndex === 0) {
            setSlideIndex(dataSlider.length - 1);
        }
    };

    const timeoutRef = useRef(null);

    function resetTimeout() {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }

    useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
            () => setSlideIndex((prevIndex) => (prevIndex === dataSlider.length - 1 ? 0 : prevIndex + 1)),
            delay,
        );

        return () => {
            resetTimeout();
        };
    }, [slideIndex]);

    return (
        <section className={cx('section-slide')}>
            <div className={cx('wrap-slick1')}>
                <BtnSlider moveSlide={nextSlide} direction={'next'} isHome={true} />

                <div className={cx('slick1')}>
                    {dataSlider.map((obj, index) => {
                        return (
                            <div
                                key={obj.id}
                                className={slideIndex === index ? cx('item-slick1', 'active-anim') : cx('slide')}
                                style={{ backgroundImage: `url(${obj.img})` }}
                            >
                                <div className={cx('container', 'h-full')}>
                                    <div className={cx('flex-col-l-m', 'h-full', 'p-t-100', 'p-b-30', 'respon5')}>
                                        <div className={cx('layer-slick1', 'animated', 'visible-true')}>
                                            <span className={cx('ltext-101', 'cl2', 'respon2')}>{obj.collection}</span>
                                        </div>

                                        <div className={cx('layer-slick1', 'animated', 'visible-true')}>
                                            <h2 className={cx('ltext-201', 'cl2', 'p-t-19', 'p-b-43', 'respon1')}>
                                                {obj.type}
                                            </h2>
                                        </div>

                                        <div className={cx('layer-slick1', 'animated', 'visible-true')}>
                                            <Link
                                                to="product.html"
                                                className={cx(
                                                    'flex-c-m',
                                                    'stext-101',
                                                    'cl0',
                                                    'size-101',
                                                    'bg1',
                                                    'bor1',
                                                    'hov-btn1',
                                                    'p-lr-15',
                                                    'trans-04',
                                                )}
                                            >
                                                Shop Now
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <BtnSlider moveSlide={prevSlide} direction={'prev'} isHome={true} />
            </div>
        </section>
    );
}

export default Slider;
