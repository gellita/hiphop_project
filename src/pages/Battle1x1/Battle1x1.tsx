
import React, { useState, useEffect } from 'react';
import styles from "./index.module.sass";

export const Battle1x1 = () => {
    const [time, setTime] = useState<number>(0); // время в миллисекундах
    const [isRunning, setIsRunning] = useState<boolean>(false);

    useEffect(() => {
        let timer: NodeJS.Timeout;
        if (isRunning) {
            timer = setInterval(() => {
                setTime((prevTime) => prevTime + 10);
            }, 10);
        } else {
            clearInterval(timer);
        }
        return () => clearInterval(timer);
    }, [isRunning]);

    const formatTime = (time: number): { minutes: string; seconds: string; milliseconds: string } => {
        const minutes = Math.floor((time % 3600000) / 60000).toString().padStart(2, '0');
        const seconds = Math.floor((time % 60000) / 1000).toString().padStart(2, '0');
        const milliseconds = Math.floor((time % 1000) / 10).toString().padStart(2, '0'); // только сотые
        return { minutes, seconds, milliseconds };
    };

    const handleReset = () => {
        setIsRunning(false);
        setTime(0);
    };

    const { minutes, seconds, milliseconds } = formatTime(time);

    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <div className={styles.user}>
                    <div className={styles.user__avatar}></div>
                    <p className={styles.user__username}>player 1</p>
                </div>
                <div className={styles.timer_container}>
                    <div className={styles.timer}>
                        <span className={styles.timer__minutes}>{minutes}</span>
                        <span className={styles.timer__separator}>:</span>
                        <span className={styles.timer__seconds}>{seconds}</span>
                        <span className={styles.timer__separator}>:</span>
                        <span className={styles.timer__milliseconds}>{milliseconds}</span>
                    </div>
                    <div className={styles.controls}>
                        <button className={styles.controls__resetButton} onClick={handleReset}>✖</button>
                        <button
                            className={isRunning ? styles.controls__stopButton : styles.controls__startButton}
                            onClick={() => setIsRunning(!isRunning)}
                        >
                            {isRunning ? '⏸' : '▶'}
                        </button>
                    </div>
                </div>
                <div className={styles.user}>
                    <div className={styles.user__avatar}></div>
                    <p className={styles.user__username}>player 2</p>
                </div>
            </div>
        </div>
    );
};


