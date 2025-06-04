import React from "react";
import styles from './index.module.sass'

const CountDown = ({ hours = 0, minutes = 0, seconds = 0 }) => {
    const [over, setOver] = React.useState(false);
    const [started, setStarted] = React.useState(false);
    const [[h, m, s], setTime] = React.useState([hours, minutes, seconds]);

    const tick = () => {
        if ( over || !started) return;

        if (h === 0 && m === 0 && s === 0) {
            setOver(true);
        } else if (m === 0 && s === 0) {
            setTime([h - 1, 59, 59]);
        } else if (s === 0) {
            setTime([h, m - 1, 59]);
        } else {
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
}
    return (
        <div>
            <p>{`${h.toString().padStart(2, '0')}:${m
                .toString()
                .padStart(2, '0')}:${s.toString().padStart(2, '0')}`}</p>
            <div>{over ? "Time's up!" : ''}</div>
            <div className={styles.buttons}>
                <button  className={styles.pause__button} onClick={() => {setStarted(true);ChangeImage('url(src/assets/Images/timer/pause.svg)');}}></button>
                <button  className={styles.restart__button} onClick={() => {reset();ChangeImage('url(src/assets/Images/timer/next.svg)')}}></button>
            </div>
        </div>
    );
};

export const Timer = () => {
    return (
        <div className={styles.timer}>
            <CountDown seconds={40} />
        </div>
    );
};
