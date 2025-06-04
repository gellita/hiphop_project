import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
// Battle1x1.tsx
import { useState, useEffect } from 'react';
import styles from "./battle.module.sass";
import { setBattleRoundWinner } from "../../services/battle.service.ts";
export const Battle = ({ round, battleId }) => {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    useEffect(() => {
        let timer;
        if (isRunning) {
            timer = setInterval(() => {
                setTime((prevTime) => prevTime + 10);
            }, 10);
        }
        return () => {
            if (timer) {
                clearInterval(timer);
            }
        };
    }, [isRunning]);
    const formatTime = (time) => {
        const minutes = Math.floor((time % 3600000) / 60000).toString().padStart(2, '0');
        const seconds = Math.floor((time % 60000) / 1000).toString().padStart(2, '0');
        const milliseconds = Math.floor((time % 1000) / 10).toString().padStart(2, '0');
        return { minutes, seconds, milliseconds };
    };
    const handleReset = () => {
        setIsRunning(false);
        setTime(0);
    };
    const { minutes, seconds, milliseconds } = formatTime(time);
    const setWinner = (round, team) => {
        console.log(battleId);
        if (team == 1) {
            setBattleRoundWinner(Number(battleId), round?.id, round?.firstTeam.id).then(() => {
                window.location.reload();
            });
        }
        else {
            setBattleRoundWinner(Number(battleId), round?.id, round?.secondTeam.id).then(() => {
                window.location.reload();
            });
        }
    };
    return (_jsx(_Fragment, { children: _jsxs("div", { className: styles.card, children: [_jsxs("div", { className: styles.user, children: [_jsx("div", { onClick: () => setWinner(round, 1), className: styles.user__avatar }), _jsx("p", { className: styles.user__username, children: round?.firstTeam.name })] }), _jsxs("div", { className: styles.timer_container, children: [_jsxs("div", { className: styles.timer, children: [_jsx("span", { className: styles.timer__minutes, children: minutes }), _jsx("span", { className: styles.timer__separator, children: ":" }), _jsx("span", { className: styles.timer__seconds, children: seconds }), _jsx("span", { className: styles.timer__separator, children: ":" }), _jsx("span", { className: styles.timer__milliseconds, children: milliseconds })] }), _jsxs("div", { className: styles.controls, children: [_jsx("button", { className: styles.controls__resetButton, onClick: handleReset, children: "\u2716" }), _jsx("button", { className: isRunning ? styles.controls__stopButton : styles.controls__startButton, onClick: () => setIsRunning(!isRunning), children: isRunning ? '⏸' : '▶' })] })] }), _jsxs("div", { className: styles.user, children: [_jsx("div", { onClick: () => setWinner(round, 2), className: styles.user__avatar }), _jsx("p", { className: styles.user__username, children: round?.secondTeam.name })] })] }) }));
};
