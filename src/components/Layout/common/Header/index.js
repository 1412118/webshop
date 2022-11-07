import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';

import styles from './Header.module.scss';
import '~/assets/fonts/iconic/css/material-design-iconic-font.css';
import './hamburgers.css';

const cx = classNames.bind(styles);
const containerClass = 'container-menu-desktop';
const fixContainerClass = 'fix-menu-desktop';
let headerClassName = '';
let boxShadow = ['wrap-menu-desktop'];
let isActive = false;

function Header(props) {
    const [containerClassName, setHeaderClassName] = useState(cx(containerClass));
    const [btnShowMenuMobileHeader, setShowMenuMobileHeader] = useState([
        'btn-show-menu-mobile',
        'hamburger',
        'hamburger--squeeze',
    ]);
    const handleScroll = () => {
        if (window.pageYOffset >= 100) {
            setHeaderClassName(cx(containerClass, fixContainerClass));
        } else if (window.pageYOffset < 100) {
            setHeaderClassName(cx(containerClass));
        }
    };

    const showMenuMobile = () => {
        if (btnShowMenuMobileHeader.includes('is-active')) {
            isActive = false;
            setShowMenuMobileHeader((prevState) => prevState.splice(0, prevState.length - 1));
        } else {
            isActive = true;
            setShowMenuMobileHeader([...btnShowMenuMobileHeader, 'is-active']);
        }
    };

    useEffect(() => {
        window.onscroll = () => handleScroll();
    }, []); // IMPORTANT, This will cause react to update depending on change of this value
    if (props.type !== 'Home') {
        headerClassName = 'header-v4';
        boxShadow.push('how-shadow1');
    } else {
        headerClassName = '';
        boxShadow = ['wrap-menu-desktop'];
    }
    return (
        <header className={cx(headerClassName)}>
            <div className={containerClassName}>
                <div className={cx('top-bar')}>
                    <div className="content-topbar flex-sb-m h-full container">
                        <div className={cx('left-top-bar')}>Free shipping for standard order over $100</div>

                        <div className={cx('right-top-bar', 'flex-w', 'h-full')}>
                            <Link to="#" className="flex-c-m trans-04 p-lr-25">
                                Help & FAQs
                            </Link>

                            <Link to="#" className="flex-c-m trans-04 p-lr-25">
                                My Account
                            </Link>

                            <Link to="#" className="flex-c-m trans-04 p-lr-25">
                                EN
                            </Link>

                            <Link to="#" className="flex-c-m trans-04 p-lr-25">
                                USD
                            </Link>
                        </div>
                    </div>
                </div>
                <div className={cx(...boxShadow)}>
                    <nav className={cx('limiter-menu-desktop', 'p-l-45')}>
                        <Link to="/" className={cx('logo')}>
                            <img src={require('~/assets/images/logo-01.png')} alt="IMG-LOGO" />
                        </Link>

                        <div className={cx('menu-desktop')}>
                            <ul className={cx('main-menu')}>
                                <li>
                                    <Link to="/">Home</Link>
                                    {/* <ul className={cx('sub-menu')}>
                                        <li>
                                            <Link to="index.html">Homepage 1</Link>
                                        </li>
                                        <li>
                                            <Link to="home-02.html">Homepage 2</Link>
                                        </li>
                                        <li>
                                            <Link to="home-03.html">Homepage 3</Link>
                                        </li>
                                    </ul> */}
                                </li>

                                <li>
                                    <Link to="/product">Shop</Link>
                                </li>

                                <li className={cx('label1')}>
                                    <Link to="shoping-cart.html">Features</Link>
                                </li>

                                <li>
                                    <Link to="blog.html">Blog</Link>
                                </li>

                                <li>
                                    <Link to="about.html">About</Link>
                                </li>

                                <li>
                                    <Link to="contact.html">Contact</Link>
                                </li>
                            </ul>
                        </div>

                        <div className={cx('wrap-icon-header', 'flex-w', 'flex-r-m', 'h-full')}>
                            <div className="flex-c-m h-full p-r-24">
                                <div
                                    className={cx(
                                        'icon-header-item',
                                        'cl2',
                                        'hov-cl1',
                                        'trans-04',
                                        'p-lr-11',
                                        'js-show-modal-search',
                                    )}
                                >
                                    <i className="zmdi zmdi-search"></i>
                                </div>
                            </div>

                            <div className="flex-c-m h-full p-r-25 bor6">
                                <div
                                    className={cx(
                                        'icon-header-item',
                                        'cl2',
                                        'hov-cl1',
                                        'trans-04',
                                        'p-lr-11',
                                        'icon-header-noti',
                                        'js-show-cart',
                                    )}
                                >
                                    <i className="zmdi zmdi-shopping-cart"></i>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
            <div className={cx('wrap-header-mobile')}>
                <div className={cx('logo-mobile')}>
                    <Link to="index.html">
                        <img src={require('~/assets/images/logo-01.png')} alt="IMG-LOGO" />
                    </Link>
                </div>

                <div className={cx('wrap-icon-header', 'flex-w', 'flex-r-m', 'h-full', 'm-r-15')}>
                    <div className="flex-c-m h-full p-r-10">
                        <div
                            className={cx(
                                'icon-header-item',
                                'cl2',
                                'hov-cl1',
                                'trans-04',
                                'p-lr-11',
                                'js-show-modal-search',
                            )}
                        >
                            <i className="zmdi zmdi-search"></i>
                        </div>
                    </div>

                    <div className="flex-c-m h-full p-lr-10 bor5">
                        <div
                            className={cx(
                                'icon-header-item',
                                'cl2',
                                'hov-cl1',
                                'trans-04',
                                'p-lr-11',
                                'icon-header-noti',
                                'js-show-cart',
                            )}
                        >
                            <i className="zmdi zmdi-shopping-cart"></i>
                        </div>
                    </div>
                </div>

                <div className={cx(...btnShowMenuMobileHeader)} onClick={showMenuMobile}>
                    <span className="hamburger-box">
                        <span className="hamburger-inner"></span>
                    </span>
                </div>
            </div>

            <div className={cx('menu-mobile')} style={{ display: isActive ? 'block' : 'none' }}>
                <ul className={cx('main-menu-m')}>
                    <li>
                        <Link to="/">Home</Link>
                        <ul className={cx('sub-menu-m')}>
                            <li>
                                <Link to="index.html">Homepage 1</Link>
                            </li>
                            <li>
                                <Link to="home-02.html">Homepage 2</Link>
                            </li>
                            <li>
                                <Link to="home-03.html">Homepage 3</Link>
                            </li>
                        </ul>
                    </li>

                    <li>
                        <Link to="/product">Shop</Link>
                    </li>

                    <li className={cx('label1')}>
                        <Link to="shoping-cart.html">Features</Link>
                    </li>

                    <li>
                        <Link to="blog.html">Blog</Link>
                    </li>

                    <li>
                        <Link to="about.html">About</Link>
                    </li>

                    <li>
                        <Link to="contact.html">Contact</Link>
                    </li>
                </ul>
            </div>
        </header>
    );
}

export default Header;
