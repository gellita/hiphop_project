import React, { useState, useRef } from 'react';
import styles from './index.module.sass';
import { Timer } from "../../components";

export const BattleGrid = () => {
    const [inputValues, setInputValues] = useState({
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

    const [selectedPlayers, setSelectedPlayers] = useState({
        player_1_12: '',
        player_1_34: '',
        player_1_56: '',
        player_1_78: '',
        player_2_12: '',
        player_2_34: '',
        player_2_56: 'player 5/6',
        player_2_78: 'player 7/8',
        player_1_2_1: 'Select player',
        player_1_2_2: 'Select player'
    });

    const dancerRef = useRef(null);

    const handleInputChange = (event) => {
        const { id, value } = event.target;
        setInputValues((prevValues) => ({
            ...prevValues,
            [id]: value,
        }));
    };

    const handleItemClick = (id, value) => {
        setSelectedPlayers((prevValues) => ({
            ...prevValues,
            [id]: value,
        }));
    };

    const parentValue = (elementRef) => {
        return elementRef.current ? elementRef.current.innerText : '';
    };

    return (
        <div className={styles.battlegrid}>
            <Timer />
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
                                                        <input type="text" id="input_1_1" placeholder="player 1"
                                                               value={inputValues.input_1_1} onChange={handleInputChange} />
                                                    </span>
                                                </div>
                                                <div className={styles.mirror__entry}>
                                                    <span>
                                                        <input type="text" id="input_1_2" placeholder="player 2"
                                                               value={inputValues.input_1_2} onChange={handleInputChange} />
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={styles.mirror__entry}>
                                            <span>Player 1/4</span>
                                            <div className={styles.branch}>
                                                <div className={styles.mirror__entry}>
                                                    <span>
                                                        <input type="text" id="input_1_3" placeholder="player 3"
                                                               value={inputValues.input_1_3} onChange={handleInputChange} />
                                                    </span>
                                                </div>
                                                <div className={styles.mirror__entry}>
                                                    <span>
                                                        <input type="text" id="input_1_4" placeholder="player 4"
                                                               value={inputValues.input_1_4} onChange={handleInputChange} />
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
                                                        <input type="text" id="input_1_5" placeholder="player 5"
                                                               value={inputValues.input_1_5} onChange={handleInputChange} />
                                                    </span>
                                                </div>
                                                <div className={styles.mirror__entry}>
                                                    <span>
                                                        <input type="text" id="input_1_6" placeholder="player 6"
                                                               value={inputValues.input_1_6} onChange={handleInputChange} />
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={styles.mirror__entry}>
                                            <span>Player 1/4</span>
                                            <div className={styles.branch}>
                                                <div className={styles.mirror__entry}>
                                                    <span>
                                                        <input type="text" id="input_1_7" placeholder="player 7"
                                                               value={inputValues.input_1_7} onChange={handleInputChange} />
                                                    </span>
                                                </div>
                                                <div className={styles.mirror__entry}>
                                                    <span>
                                                        <input type="text" id="input_1_8" placeholder="player 8"
                                                               value={inputValues.input_1_8} onChange={handleInputChange} />
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
                                                    <input type="text" id="input_2_1" placeholder="player 1"
                                                           value={inputValues.input_2_1} onChange={handleInputChange} />
                                                </span>
                                            </div>
                                            <div className={styles.entry}>
                                                <span>
                                                    <input type="text" id="input_2_2" placeholder="player 2"
                                                           value={inputValues.input_2_2} onChange={handleInputChange} />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles.entry}>
                                        <span>Player 1/4</span>
                                        <div className={styles.branch}>
                                            <div className={styles.entry}>
                                                <span>
                                                    <input type="text" id="input_2_3" placeholder="player 3"
                                                           value={inputValues.input_2_3} onChange={handleInputChange} />
                                                </span>
                                            </div>
                                            <div className={styles.entry}>
                                                <span>
                                                    <input type="text" id="input_2_4" placeholder="player 4"
                                                           value={inputValues.input_2_4} onChange={handleInputChange} />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.entry}>
                                <span className={styles.dropdown}>
                                    Player 1/2
                                    <ul className={styles.dropdown__content}>
                                        <li className={styles.dropdown__item}>{parentValue(dancerRef)}</li>
                                        <li className={styles.dropdown__item}>3
                                        </li>
                                    </ul>
                                </span>
                                <div className={styles.branch}>
                                    <div className={styles.entry}>
                                        <span ref={dancerRef} className={styles.dropdown}>
                                            {selectedPlayers['player_2_56']}
                                            <ul className={styles.dropdown__content}>
                                                <li className={styles.dropdown__item}
                                                    onClick={() => handleItemClick('player_2_56', inputValues.input_2_5)}>
                                                    {inputValues.input_2_5}
                                                </li>
                                                <li className={styles.dropdown__item}
                                                    onClick={() => handleItemClick('player_2_56', inputValues.input_2_6)}>
                                                    {inputValues.input_2_6}
                                                </li>
                                            </ul>
                                        </span>
                                        <div className={styles.branch}>
                                            <div className={styles.entry}>
                                                <span>
                                                    <input type="text" id="input_2_5" placeholder="player 5"
                                                           value={inputValues.input_2_5} onChange={handleInputChange} />
                                                </span>
                                            </div>
                                            <div className={styles.entry}>
                                                <span>
                                                    <input type="text" id="input_2_6" placeholder="player 6"
                                                           value={inputValues.input_2_6} onChange={handleInputChange} />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles.entry}>
                                        <span className={styles.dropdown}>
                                            {selectedPlayers['player_2_78']}
                                            <ul className={styles.dropdown__content}>
                                                <li className={styles.dropdown__item}
                                                    onClick={() => handleItemClick('player_2_78', inputValues.input_2_7)}>
                                                    {inputValues.input_2_7}
                                                </li>
                                                <li className={styles.dropdown__item}
                                                    onClick={() => handleItemClick('player_2_78', inputValues.input_2_8)}>
                                                    {inputValues.input_2_8}
                                                </li>
                                            </ul>
                                        </span>
                                        <div className={styles.branch}>
                                            <div className={styles.entry}>
                                                <span>
                                                    <input type="text" id="input_2_7" placeholder="player 7"
                                                           value={inputValues.input_2_7} onChange={handleInputChange} />
                                                </span>
                                            </div>
                                            <div className={styles.entry}>
                                                <span>
                                                    <input type="text" id="input_2_8" placeholder="player 8"
                                                           value={inputValues.input_2_8} onChange={handleInputChange} />
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
