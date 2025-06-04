import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
import styles from './index.module.sass';
const CountDown = ({ hours = 0, minutes = 0, seconds = 0 }) => {
    const [over, setOver] = React.useState(false);
    const [started, setStarted] = React.useState(false);
    const [[h, m, s], setTime] = React.useState([hours, minutes, seconds]);
    const tick = () => {
        if (over || !started)
            return;
        if (h === 0 && m === 0 && s === 0) {
            setOver(true);
        }
        else if (m === 0 && s === 0) {
            setTime([h - 1, 59, 59]);
        }
        else if (s === 0) {
            setTime([h, m - 1, 59]);
        }
        else {
            setTime([h, m, s - 1]);
        }
    };
    const reset = () => {
        setTime([parseInt(String(hours)), parseInt(String(minutes)), parseInt(String(seconds))]);
        setOver(false);
        setStarted(false);
    };
    React.useEffect(() => {
        const timerID = setInterval(() => tick(), 1000);
        return () => clearInterval(timerID);
    });
    const ChangeImage = (url = '') => {
        const button = document.querySelector('button');
        button.style.backgroundImage = url;
    };
    return (_jsxs("div", { children: [_jsx("p", { children: `${h.toString().padStart(2, '0')}:${m
                    .toString()
                    .padStart(2, '0')}:${s.toString().padStart(2, '0')}` }), _jsx("div", { children: over ? "Time's up!" : '' }), _jsxs("div", { className: styles.buttons, children: [_jsx("button", { className: styles.pause__button, onClick: () => { setStarted(true); ChangeImage('url(src/assets/Images/timer/pause.svg)'); } }), _jsx("button", { className: styles.restart__button, onClick: () => { reset(); ChangeImage('url(src/assets/Images/timer/next.svg)'); } })] })] }));
};
export const Timer = () => {
    return (_jsx("div", { className: styles.timer, children: _jsx(CountDown, { seconds: 40 }) }));
};
