import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styles from './index.module.sass';
import { Carousel } from "../../components";
export const HomePage = () => {
    return (_jsxs("div", { className: styles.main, children: [_jsxs("div", { className: styles.home, children: [_jsxs("div", { className: styles.background, children: [_jsx("img", { src: "./src/assets/Images/homepage/background_new.jpg", className: styles.home__backimg, alt: "background image" }), _jsx("img", { src: "./src/assets/Images/homepage/vector.png", className: styles.home__vectorimg, alt: "vector image" })] }), _jsxs("div", { className: styles.home__text, children: [_jsx("div", { className: styles.home__text__hh, children: "HIP-HOP" }), _jsx("div", { className: styles.home__text__ch, children: "chronicles" })] })] }), _jsx("div", { className: styles.gallery, children: _jsx(Carousel, {}) })] }));
};
