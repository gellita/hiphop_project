// Battle1x1.tsx
import {useState, useEffect} from 'react';
import styles from "./battle.module.sass";
import {setBattleRoundWinner} from "../../services/battle.service.ts";

interface Round {
    id: number;
    number: number;
    position: number;
    firstTeam: Team,
    secondTeam: Team,
    winner: number | null,
}

interface BattleProps {
    round: Round | null;
    battleId: string | null;
}

interface Team {
    id: number;
    name: string;
}

export const Battle = ({round, battleId} : BattleProps) => {
    const [time, setTime] = useState<number>(0);
    const [isRunning, setIsRunning] = useState<boolean>(false);

    useEffect(() => {
        let timer: NodeJS.Timeout | undefined;

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

    const formatTime = (time: number) => {
        const minutes = Math.floor((time % 3600000) / 60000).toString().padStart(2, '0');
        const seconds = Math.floor((time % 60000) / 1000).toString().padStart(2, '0');
        const milliseconds = Math.floor((time % 1000) / 10).toString().padStart(2, '0');
        return {minutes, seconds, milliseconds};
    };

    const handleReset = () => {
        setIsRunning(false);
        setTime(0);
    };

    const {minutes, seconds, milliseconds} = formatTime(time);

    const setWinner = (round: Round, team: number) => {
        console.log(battleId);
        if (team == 1) {
            setBattleRoundWinner(Number(battleId), round?.id, round?.firstTeam.id).then(() => {
                window.location.reload();
            });
        } else {
            setBattleRoundWinner(Number(battleId), round?.id, round?.secondTeam.id).then(() => {
                window.location.reload();
            });
        }
    }

    return (
        <>
            <div className={styles.card}>
                <div className={styles.user}>
                    <div onClick={() => setWinner(round, 1)} className={styles.user__avatar}></div>
                    <p className={styles.user__username}>{round?.firstTeam.name}</p>
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
                    <div onClick={() => setWinner(round, 2)} className={styles.user__avatar}></div>
                    <p className={styles.user__username}>{round?.secondTeam.name}</p>
                </div>
            </div>
        </>
    );
};
