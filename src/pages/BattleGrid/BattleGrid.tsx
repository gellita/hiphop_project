import React, { useState } from 'react';
import styles from './index.module.sass';

export const BattleGrid = () => {
    const [inputValues, setInputValues] = useState<{ [key: string]: string }>({
        input_1_1: '',
        input_1_2: '',
        input_1_3: '',
        input_1_4: '',
        input_1_5: '',
        input_1_6: '',
        input_1_7: '',
        input_1_8: '',
        input_2_1: '',
        input_2_2: '',
        input_2_3: '',
        input_2_4: '',
        input_2_5: '',
        input_2_6: '',
        input_2_7: '',
        input_2_8: ''
    });

    const [selectedPlayers, setSelectedPlayers] = useState<{ [key: string]: string }>({
        player_1_12: '',
        player_1_34: '',
        player_1_56: '',
        player_1_78: '',

        player_2_12: '',
        player_2_34: '',
        player_2_56: '',
        player_2_78: 'player 7/8',
        player_1_2_1: 'Select player',
        player_1_2_2: 'Select player'

    });

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = event.target;
        setInputValues((prevValues) => ({
            ...prevValues,
            [id]: value,
        }));
    };

    const handleItemClick = (id: string, value: string) => {
        setSelectedPlayers((prevValues) => ({
            ...prevValues,
            [id]: value,
        }));
    };

    return (
        <div className={styles.battlegrid}>
            <div className={styles.trees}>
                <div id="mirror_tree" className={styles.mirror_tree}>
                    <div className={styles.branch}>
                        <div className={styles.mirror__entry}>
                            <span>Player Final</span>
                            <div className={styles.branch}>
                                <div className={styles.mirror__entry}>
                                    <span>Player 1/2</span>
                                    <div className={styles.branch}>
                                        <div className={styles.mirror__entry}>
                                            <span>Player 1/4</span>
                                            <div className={styles.branch}>
                                                <div className={styles.mirror__entry}>
                                                    <span>
                                                        <input id="dancer" type="text" placeholder="input" />
                                                    </span>
                                                </div>
                                                <div className={styles.mirror__entry}>
                                                    <span>
                                                        <input type="text" placeholder="input" />
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={styles.mirror__entry}>
                                            <span></span>
                                            <div className={styles.branch}>
                                                <div className={styles.mirror__entry}>
                                                    <span>
                                                        <input type="text" placeholder="input" />
                                                    </span>
                                                </div>
                                                <div className={styles.mirror__entry}>
                                                    <span>
                                                        <input type="text" placeholder="input" />
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.mirror__entry}>
                                    <span>Player 1/2</span>
                                    <div className={styles.branch}>
                                        <div className={styles.mirror__entry}>
                                            <span>Player 1/4</span>
                                            <div className={styles.branch}>
                                                <div className={styles.mirror__entry}>
                                                    <span>
                                                        <input type="text" placeholder="input" />
                                                    </span>
                                                </div>
                                                <div className={styles.mirror__entry}>
                                                    <span>
                                                        <input type="text" placeholder="input" />
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={styles.mirror__entry}>
                                            <span>Player 1/4</span>
                                            <div className={styles.branch}>
                                                <div className={styles.mirror__entry}>
                                                    <span>
                                                        <input type="text" placeholder="input" />
                                                    </span>
                                                </div>
                                                <div className={styles.mirror__entry}>
                                                    <span>
                                                        <input type="text" placeholder="input" />
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="tree" className={styles.tree}>
                    <div className={styles.entry}>
                        <span>Player Final</span>
                        <div className={styles.branch}>
                            <div className={styles.entry}>
                                <span>Player 1/2</span>
                                <div className={styles.branch}>
                                    <div className={styles.entry}>
                                        <span>Player 1/4</span>
                                        <div className={styles.branch}>
                                            <div className={styles.entry}>
                                                <span>
                                                    <input type="text" placeholder="input" />
                                                </span>
                                            </div>
                                            <div className={styles.entry}>
                                                <span>
                                                    <input type="text" placeholder="input" />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles.entry}>
                                        <span>Player 1/4</span>
                                        <div className={styles.branch}>
                                            <div className={styles.entry}>
                                                <span>
                                                    <input type="text" placeholder="input" />
                                                </span>
                                            </div>
                                            <div className={styles.entry}>
                                                <span>
                                                    <input type="text" placeholder="input" />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.entry}>
                                <span>Player 1/2</span>
                                <div className={styles.branch}>
                                    <div className={styles.entry}>
                                        <span className={styles.dropdown}>
                                            {selectedPlayers['player_2_5']}
                                            <ul className={styles.dropdown__content}>
                                                <li className={styles.dropdown__item} onClick={() => handleItemClick('player_2_5', inputValues.input_2_5)}>
                                                    {inputValues.input_2_5}
                                                </li>
                                                <li className={styles.dropdown__item} onClick={() => handleItemClick('player_2_5', inputValues.input_2_6)}>
                                                    {inputValues.input_2_6}
                                                </li>
                                            </ul>
                                        </span>
                                        <div className={styles.branch}>
                                            <div className={styles.entry}>
                                                <span>
                                                    <input type="text" id="input_2_5" placeholder="player 5" value={inputValues.input_2_5} onChange={handleInputChange} />
                                                </span>
                                            </div>
                                            <div className={styles.entry}>
                                                <span>
                                                    <input type="text" id="input_2_6" placeholder="player 6" value={inputValues.input_2_6} onChange={handleInputChange} />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles.entry}>
                                        <span className={styles.dropdown}>
                                            {selectedPlayers['player_2_78']}
                                            <ul className={styles.dropdown__content}>
                                                <li className={styles.dropdown__item} onClick={() => handleItemClick('player_2_78', inputValues.input_2_7)}>
                                                    {inputValues.input_2_7}
                                                </li>
                                                <li className={styles.dropdown__item} onClick={() => handleItemClick('player_2_78', inputValues.input_2_8)}>
                                                    {inputValues.input_2_8}
                                                </li>
                                            </ul>
                                        </span>
                                        <div className={styles.branch}>
                                            <div className={styles.entry}>
                                                <span>
                                                    <input type="text" id="input_2_7" placeholder="player 7" value={inputValues.input_2_7} onChange={handleInputChange} />
                                                </span>
                                            </div>
                                            <div className={styles.entry}>
                                                <span>
                                                    <input type="text" id="input_2_8" placeholder="player 8" value={inputValues.input_2_8} onChange={handleInputChange} />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
