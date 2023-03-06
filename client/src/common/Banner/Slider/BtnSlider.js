import React from 'react';
import classNames from 'classnames/bind';
import styles from './Slider.module.scss';
import '~/assets/fonts/iconic/css/material-design-iconic-font.css';

const cx = classNames.bind(styles);
let leftArrow = 'zmdi zmdi-caret-left';
let rightArrow = 'zmdi zmdi-caret-right';

export default function BtnSlider({ direction, moveSlide, isHome }) {
    let next = [],
        prev = [];
    if (isHome === true) {
        next = ['arrow-slick1', 'next-slick1'];
        prev = ['arrow-slick1', 'prev-slick1'];
    } else {
        next = ['arrow-slick3', 'next-slick3'];
        prev = ['arrow-slick3', 'prev-slick3'];
    }
    return (
        <button onClick={moveSlide} className={direction === 'next' ? cx(...next) : cx(...prev)}>
            <i className={direction === 'next' ? rightArrow : leftArrow}></i>
        </button>
    );
}
