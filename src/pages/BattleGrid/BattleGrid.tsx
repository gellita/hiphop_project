import React, {useState, useRef, useEffect} from 'react';
import styles from './battlegrid.module.sass';
import {Battle, Timer} from "../../components";
import {getBattle} from "../../services/battle.service.ts";
import {useParams} from "react-router-dom";
import {Modal} from "../../components/Modal";

interface Round {
    id: number;
    number: number;
    position: number;
    firstTeam: Team,
    secondTeam: Team,
    winner: number | null,
}

interface Team {
    id: number;
    name: string;
}

export const BattleGrid = () => {
    const [rounds, setRounds] = useState<Round[]>([]);
    const [selectedRound, setSelectedRound] = useState<Round | null>(null);
    const {id} = useParams<{ id: string }>();
    const [inputValues, setInputValues] = useState<Record<string, string>>({
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
        player_1_12: 'player 1/2',
        player_1_34: 'player 3/4',
        player_1_56: 'player 5/6',
        player_1_78: 'player 7/8',
        player_2_12: 'player 1/2',
        player_2_34: 'player 3/4',
        player_2_56: 'player 5/6',
        player_2_78: 'player 7/8',
        player_1_2_1: 'Select player',
        player_1_2_2: 'Select player'
    });

    const dancerRef = useRef(null);
    //
    // const handleInputChange = (event) => {
    //     const {id, value} = event.target;
    //     setInputValues((prevValues) => ({
    //         ...prevValues,
    //         [id]: value,
    //     }));
    // };

    const handleItemClick = (id, value) => {
        setSelectedPlayers((prevValues) => ({
            ...prevValues,
            [id]: value,
        }));
    };

    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValues({...inputValues, [e.target.id]: e.target.value});
    };

    const parentValue = (elementRef) => {
        return elementRef.current ? elementRef.current.innerText : '';
    };
    // const {battleId} = useParams<{ id: string }>();
    const currentURL = window.location.href;

    const openPopup = (round: Round) => {
        setSelectedRound(round);
        setIsPopupOpen(true);
    };

    const battleId = id;

    useEffect(() => {

        const battleId = id;
        // const {battleId} = useParams<{ id: string }>()
        getBattle(battleId)
            .then(data => {
                if (!data || !data.rounds) return;
                console.log('BattleGrid', data);

                setRounds(data.rounds);

                const updatedInputValues = {...inputValues};

                let i = 1;
                let cnt = 1;
                data.rounds.forEach((round: Round, index: number) => {
                    // const pos = index + 1;
                    if (i < 8) {
                        updatedInputValues["input_1_" + i] = round.firstTeam.name;
                        updatedInputValues["input_1_" + (i + 1)] = round.secondTeam.name;
                        i += 2;
                    } else if (i <= 16) {
                        updatedInputValues["input_2_" + (i - 8)] = round.firstTeam.name;
                        updatedInputValues["input_2_" + ((i + 1) - 8)] = round.secondTeam.name;
                        i += 2;
                    }
                    if (i > 16) {
                        console.log(round.number);
                        if (round.position % 2 == 0) {
                            setSelectedPlayers(prev => ({
                                ...prev,
                                ["player_" + 1 + "_" + "56"]: round.firstTeam != null ?  round.firstTeam.name : "player 5/6",
                                ["player_" + 1 + "_" + "78"]: round.secondTeam != null ?  round.secondTeam.name : "player 7/8",
                            }));
                        } else {
                            setSelectedPlayers(prev => ({
                                ...prev,
                                ["player_" + 2 + "_" + "12"]: round.firstTeam != null ? round.firstTeam.name : "player 1/2",
                                ["player_" + 2 + "_" + "34"]: round.secondTeam != null ? round.secondTeam.name : "player 3/4",
                            }));
                        }
                    }
                });
                console.log(updatedInputValues);

                setInputValues(updatedInputValues);

            })
            .catch((err) => console.error("Failed to load battle data", err));
    }, []);

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
                                            <span className={styles.dropdown} onClick={() => openPopup(rounds[0])}>
                                            {selectedPlayers['player_1_12']}</span>
                                            <div className={styles.branch}>
                                                <div className={styles.mirror__entry}>
                                                    <span>
                                                        <input type="text" id="input_1_1" placeholder="player 1"
                                                               value={inputValues.input_1_1}
                                                               onChange={handleInputChange}/>
                                                    </span>
                                                </div>
                                                <div className={styles.mirror__entry}>
                                                    <span>
                                                        <input type="text" id="input_1_2" placeholder="player 2"
                                                               value={inputValues.input_1_2}
                                                               onChange={handleInputChange}/>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={styles.mirror__entry}>
                                            <span className={styles.dropdown} onClick={() => openPopup(rounds[1])}>
                                            {selectedPlayers['player_1_34']}
                                            </span>
                                            <div className={styles.branch}>
                                                <div className={styles.mirror__entry}>
                                                    <span>
                                                        <input type="text" id="input_1_3" placeholder="player 3"
                                                               value={inputValues.input_1_3}
                                                               onChange={handleInputChange}/>
                                                    </span>
                                                </div>
                                                <div className={styles.mirror__entry}>
                                                    <span>
                                                        <input type="text" id="input_1_4" placeholder="player 4"
                                                               value={inputValues.input_1_4}
                                                               onChange={handleInputChange}/>
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
                                            <span className={styles.dropdown} onClick={() => openPopup(rounds[2])}>
                                            {selectedPlayers['player_1_56']}</span>
                                            <div className={styles.branch}>
                                                <div className={styles.mirror__entry}>
                                                    <span>
                                                        <input type="text" id="input_1_5" placeholder="player 5"
                                                               value={inputValues.input_1_5}
                                                               onChange={handleInputChange}/>
                                                    </span>
                                                </div>
                                                <div className={styles.mirror__entry}>
                                                    <span>
                                                        <input type="text" id="input_1_6" placeholder="player 6"
                                                               value={inputValues.input_1_6}
                                                               onChange={handleInputChange}/>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={styles.mirror__entry}>
                                            <span className={styles.dropdown} onClick={() => openPopup(rounds[3])}>
                                            {selectedPlayers['player_1_78']} </span>
                                            <div className={styles.branch}>
                                                <div className={styles.mirror__entry}>
                                                    <span>
                                                        <input type="text" id="input_1_7" placeholder="player 7"
                                                               value={inputValues.input_1_7}
                                                               onChange={handleInputChange}/>
                                                    </span>
                                                </div>
                                                <div className={styles.mirror__entry}>
                                                    <span>
                                                        <input type="text" id="input_1_8" placeholder="player 8"
                                                               value={inputValues.input_1_8}
                                                               onChange={handleInputChange}/>
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
                                        <span className={styles.dropdown} onClick={() => openPopup(rounds[4])}>
                                            {selectedPlayers['player_2_12']}
                                        </span>
                                        <div className={styles.branch}>
                                            <div className={styles.entry}>
                                                <span>
                                                    <input type="text" id="input_2_1" placeholder="player 1"
                                                           value={inputValues.input_2_1} onChange={handleInputChange}/>
                                                </span>
                                            </div>
                                            <div className={styles.entry}>
                                                <span>
                                                    <input type="text" id="input_2_2" placeholder="player 2"
                                                           value={inputValues.input_2_2} onChange={handleInputChange}/>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles.entry}>
                                        <span className={styles.dropdown} onClick={() => openPopup(rounds[5])}>
                                            {selectedPlayers['player_2_34']}
                                        </span>
                                        <div className={styles.branch}>
                                            <div className={styles.entry}>
                                                <span>
                                                    <input type="text" id="input_2_3" placeholder="player 3"
                                                           value={inputValues.input_2_3} onChange={handleInputChange}/>
                                                </span>
                                            </div>
                                            <div className={styles.entry}>
                                                <span>
                                                    <input type="text" id="input_2_4" placeholder="player 4"
                                                           value={inputValues.input_2_4} onChange={handleInputChange}/>
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
                                        <span ref={dancerRef} className={styles.dropdown}
                                              onClick={() => openPopup(rounds[6])}>
                                            {selectedPlayers['player_2_56']}
                                        </span>
                                        <div className={styles.branch}>
                                            <div className={styles.entry}>
                                                <span>
                                                    <input type="text" id="input_2_5" placeholder="player 5"
                                                           value={inputValues.input_2_5} onChange={handleInputChange}/>
                                                </span>
                                            </div>
                                            <div className={styles.entry}>
                                                <span>
                                                <input type="text" id="input_2_6" placeholder="player 6"
                                                       value={inputValues.input_2_6} onChange={handleInputChange}/>
                                            </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles.entry}>
                                        <span className={styles.dropdown} onClick={() => openPopup(rounds[7])}>
                                            {selectedPlayers['player_2_78']}
                                        </span>
                                        <div className={styles.branch}>
                                            <div className={styles.entry}>
                                                <span>
                                                    <input type="text" id="input_2_7" placeholder="player 7"
                                                           value={inputValues.input_2_7} onChange={handleInputChange}/>
                                                </span>
                                            </div>
                                            <div className={styles.entry}>
                                                <span>
                                                    <input type="text" id="input_2_8" placeholder="player 8"
                                                           value={inputValues.input_2_8} onChange={handleInputChange}/>
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
            {isPopupOpen && (
                <Modal isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)}>
                    <Battle round={selectedRound} battleId={battleId}/>
                </Modal>
            )}
        </div>
    );
};
