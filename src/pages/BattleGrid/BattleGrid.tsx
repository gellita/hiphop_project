import { useState } from 'react';
import styles from './index.module.sass';

export const BattleGrid = () => {
    const [player1, setPlayer1] = useState('');

    return (<div className={styles.battlegrid}>

        <div className={styles.trees}>
            <div id="mirror_tree" className={styles.mirror_tree}>
                <div className={styles.branch}>
                    <div className={styles.mirror__entry}><span>Player Final</span>
                        <div className={styles.branch}>
                            <div className={styles.mirror__entry}><span>Player 1/2</span>
                                <div className={styles.branch}>
                                    <div className={styles.mirror__entry}><span>Player 1/4</span>
                                        <div className={styles.branch}>
                                            <div className={styles.mirror__entry}><span>{player1}</span></div>
                                            <div className={styles.mirror__entry}><span>Player 1/8</span></div>
                                        </div>
                                    </div>
                                    <div className={styles.mirror__entry}><span>Player 1/4</span>
                                        <div className={styles.branch}>
                                            <div className={styles.mirror__entry}><span>Player 1/8</span></div>
                                            <div className={styles.mirror__entry}><span>Player 1/8</span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.mirror__entry}><span>Player 1/2</span>
                                <div className={styles.branch}>
                                    <div className={styles.mirror__entry}><span>Player 1/4</span>
                                        <div className={styles.branch}>
                                            <div className={styles.mirror__entry}><span>Player 1/8</span></div>
                                            <div className={styles.mirror__entry}><span>Player 1/8</span></div>
                                        </div>
                                    </div>
                                    <div className={styles.mirror__entry}><span>Player 1/4</span>
                                        <div className={styles.branch}>
                                            <div className={styles.mirror__entry}><span>Player 1/8</span></div>
                                            <div className={styles.mirror__entry}><span>Player 1/8</span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="tree" className={styles.tree}>
                <div className={styles.entry}><span>Player Final</span>
                    <div className={styles.branch}>
                        <div className={styles.entry}><span>Player 1/2</span>
                            <div className={styles.branch}>
                                <div className={styles.entry}><span>Player 1/4</span>
                                    <div className={styles.branch}>
                                        <div className={styles.entry}><span>Player 1/8</span></div>
                                        <div className={styles.entry}><span>Player 1/8</span></div>
                                    </div>
                                </div>
                                <div className={styles.entry}><span>Player 1/4</span>
                                    <div className={styles.branch}>
                                        <div className={styles.entry}><span>Player 1/8</span></div>
                                        <div className={styles.entry}><span>Player 1/8</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.entry}><span>Player 1/2</span>
                            <div className={styles.branch}>
                                <div className={styles.entry}><span>Player 1/4</span>
                                    <div className={styles.branch}>
                                        <div className={styles.entry}><span>Player 1/8</span></div>
                                        <div className={styles.entry}><span>Player 1/8</span></div>
                                    </div>
                                </div>
                                <div className={styles.entry}><span>Player 1/4</span>
                                    <div className={styles.branch}>
                                        <div className={styles.entry}><span>Player 1/8</span></div>
                                        <div className={styles.entry}><span>Player 1/8</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <input
                type="text"
                value={player1}
                onChange={(e) => setPlayer1(e.target.value)}
                placeholder="Enter Player 1"
            />
        </div>

        </div>
    );
};
