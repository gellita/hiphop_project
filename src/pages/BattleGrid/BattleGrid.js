import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useRef, useEffect } from 'react';
import styles from './battlegrid.module.sass';
import { Battle } from "../../components";
import { getBattle } from "../../services/battle.service.ts";
import { useParams } from "react-router-dom";
import { Modal } from "../../components/Modal";
export const BattleGrid = () => {
    const [rounds, setRounds] = useState([]);
    const [selectedRound, setSelectedRound] = useState(null);
    const { id } = useParams();
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
        player_1_12: 'player 1/2',
        player_1_34: 'player 3/4',
        player_1_56: 'player 5/6',
        player_1_78: 'player 7/8',
        player_2_12: 'player 1/2',
        player_2_34: 'player 3/4',
        player_2_56: 'player 5/6',
        player_2_78: 'player 7/8',
        player_1_1234: 'player 12/34',
        player_1_5678: 'player 56/78',
        player_2_1234: 'player 12/34',
        player_2_5678: 'player 56/78',
        player_1_12345678: 'Player Final',
        player_2_12345678: 'Player Final',
        player_1_2_1: 'Select player',
        player_1_2_2: 'Select player'
    });
    const dancerRef = useRef(null);
    const handleItemClick = (id, value) => {
        setSelectedPlayers((prevValues) => ({
            ...prevValues,
            [id]: value,
        }));
    };
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const handleInputChange = (e) => {
        setInputValues({ ...inputValues, [e.target.id]: e.target.value });
    };
    const parentValue = (elementRef) => {
        return elementRef.current ? elementRef.current.innerText : '';
    };
    const currentURL = window.location.href;
    const openPopup = (round) => {
        if (round && round.firstTeam != null && round.secondTeam != null) {
            console.log('Opening popup with round:', round);
            setSelectedRound(round);
            setIsPopupOpen(true);
        }
    };
    const findRoundByNumberAndPosition = (number, position) => {
        return rounds.find(round => round.number === number && round.position === position);
    };
    const battleId = id;
    useEffect(() => {
        const battleId = id;
        // const {battleId} = useParams<{ id: string }>()
        getBattle(battleId)
            .then(data => {
            if (!data || !data.rounds)
                return;
            console.log('BattleGrid', data);
            setRounds(data.rounds);
            const updatedInputValues = { ...inputValues };
            let i = 1;
            let cnt = 1;
            data.rounds.forEach((round, index) => {
                // const pos = index + 1;
                if (i < 8) {
                    updatedInputValues["input_1_" + i] = round.firstTeam.name;
                    updatedInputValues["input_1_" + (i + 1)] = round.secondTeam.name;
                    i += 2;
                }
                else if (i <= 16) {
                    updatedInputValues["input_2_" + (i - 8)] = round.firstTeam.name;
                    updatedInputValues["input_2_" + ((i + 1) - 8)] = round.secondTeam.name;
                    i += 2;
                }
                if (round.number == 2) {
                    if (round.position == 1) {
                        setSelectedPlayers(prev => ({
                            ...prev,
                            ["player_" + 1 + "_" + "12"]: round.firstTeam != null ? round.firstTeam.name : "player 1/2",
                            ["player_" + 1 + "_" + "34"]: round.secondTeam != null ? round.secondTeam.name : "player 3/4",
                        }));
                    }
                    if (round.position == 2) {
                        setSelectedPlayers(prev => ({
                            ...prev,
                            ["player_" + 1 + "_" + "56"]: round.firstTeam != null ? round.firstTeam.name : "player 5/6",
                            ["player_" + 1 + "_" + "78"]: round.secondTeam != null ? round.secondTeam.name : "player 7/8",
                        }));
                    }
                    if (round.position == 3) {
                        setSelectedPlayers(prev => ({
                            ...prev,
                            ["player_" + 2 + "_" + "12"]: round.firstTeam != null ? round.firstTeam.name : "player 1/2",
                            ["player_" + 2 + "_" + "34"]: round.secondTeam != null ? round.secondTeam.name : "player 3/4",
                        }));
                    }
                    if (round.position == 4) {
                        setSelectedPlayers(prev => ({
                            ...prev,
                            ["player_" + 2 + "_" + "56"]: round.firstTeam != null ? round.firstTeam.name : "player 5/6",
                            ["player_" + 2 + "_" + "78"]: round.secondTeam != null ? round.secondTeam.name : "player 7/8",
                        }));
                    }
                }
                if (round.number == 3) {
                    if (round.position == 1) {
                        setSelectedPlayers(prev => ({
                            ...prev,
                            ["player_" + 1 + "_" + "1234"]: round.firstTeam != null ? round.firstTeam.name : "player 12/34",
                            ["player_" + 1 + "_" + "5678"]: round.secondTeam != null ? round.secondTeam.name : "player 56/78",
                        }));
                    }
                    if (round.position == 2) {
                        setSelectedPlayers(prev => ({
                            ...prev,
                            ["player_" + 2 + "_" + "1234"]: round.firstTeam != null ? round.firstTeam.name : "player 12/34",
                            ["player_" + 2 + "_" + "5678"]: round.secondTeam != null ? round.secondTeam.name : "player 56/78",
                        }));
                    }
                }
                if (round.number == 4) {
                    if (round.position == 1) {
                        setSelectedPlayers(prev => ({
                            ...prev,
                            ["player_" + 1 + "_" + "12345678"]: round.firstTeam != null ? round.firstTeam.name : "Player Final",
                            ["player_" + 2 + "_" + "12345678"]: round.secondTeam != null ? round.secondTeam.name : "Player Final",
                        }));
                    }
                }
            });
            console.log(updatedInputValues);
            setInputValues(updatedInputValues);
        })
            .catch((err) => console.error("Failed to load battle data", err));
    }, []);
    return (_jsxs("div", { className: styles.battlegrid, children: [_jsxs("div", { className: styles.trees, children: [_jsx("div", { id: "mirror_tree", className: styles.mirror_tree, children: _jsx("div", { className: styles.branch, children: _jsxs("div", { className: styles.mirror__entry, children: [_jsx("span", { className: styles.dropdown, onClick: () => openPopup(findRoundByNumberAndPosition(3, 1)), children: selectedPlayers['player_1_12345678'] }), _jsxs("div", { className: styles.branch, children: [_jsxs("div", { className: styles.mirror__entry, children: [_jsx("span", { className: styles.dropdown, onClick: () => openPopup(findRoundByNumberAndPosition(2, 1)), children: selectedPlayers['player_1_1234'] }), _jsxs("div", { className: styles.branch, children: [_jsxs("div", { className: styles.mirror__entry, children: [_jsx("span", { className: styles.dropdown, onClick: () => openPopup(rounds[0]), children: selectedPlayers['player_1_12'] }), _jsxs("div", { className: styles.branch, children: [_jsx("div", { className: styles.mirror__entry, children: _jsx("span", { children: _jsx("input", { type: "text", id: "input_1_1", placeholder: "player 1", value: inputValues.input_1_1, onChange: handleInputChange }) }) }), _jsx("div", { className: styles.mirror__entry, children: _jsx("span", { children: _jsx("input", { type: "text", id: "input_1_2", placeholder: "player 2", value: inputValues.input_1_2, onChange: handleInputChange }) }) })] })] }), _jsxs("div", { className: styles.mirror__entry, children: [_jsx("span", { className: styles.dropdown, onClick: () => openPopup(rounds[1]), children: selectedPlayers['player_1_34'] }), _jsxs("div", { className: styles.branch, children: [_jsx("div", { className: styles.mirror__entry, children: _jsx("span", { children: _jsx("input", { type: "text", id: "input_1_3", placeholder: "player 3", value: inputValues.input_1_3, onChange: handleInputChange }) }) }), _jsx("div", { className: styles.mirror__entry, children: _jsx("span", { children: _jsx("input", { type: "text", id: "input_1_4", placeholder: "player 4", value: inputValues.input_1_4, onChange: handleInputChange }) }) })] })] })] })] }), _jsxs("div", { className: styles.mirror__entry, children: [_jsx("span", { className: styles.dropdown, onClick: () => openPopup(findRoundByNumberAndPosition(2, 2)), children: selectedPlayers['player_1_5678'] }), _jsxs("div", { className: styles.branch, children: [_jsxs("div", { className: styles.mirror__entry, children: [_jsx("span", { className: styles.dropdown, onClick: () => openPopup(rounds[2]), children: selectedPlayers['player_1_56'] }), _jsxs("div", { className: styles.branch, children: [_jsx("div", { className: styles.mirror__entry, children: _jsx("span", { children: _jsx("input", { type: "text", id: "input_1_5", placeholder: "player 5", value: inputValues.input_1_5, onChange: handleInputChange }) }) }), _jsx("div", { className: styles.mirror__entry, children: _jsx("span", { children: _jsx("input", { type: "text", id: "input_1_6", placeholder: "player 6", value: inputValues.input_1_6, onChange: handleInputChange }) }) })] })] }), _jsxs("div", { className: styles.mirror__entry, children: [_jsxs("span", { className: styles.dropdown, onClick: () => openPopup(rounds[3]), children: [selectedPlayers['player_1_78'], " "] }), _jsxs("div", { className: styles.branch, children: [_jsx("div", { className: styles.mirror__entry, children: _jsx("span", { children: _jsx("input", { type: "text", id: "input_1_7", placeholder: "player 7", value: inputValues.input_1_7, onChange: handleInputChange }) }) }), _jsx("div", { className: styles.mirror__entry, children: _jsx("span", { children: _jsx("input", { type: "text", id: "input_1_8", placeholder: "player 8", value: inputValues.input_1_8, onChange: handleInputChange }) }) })] })] })] })] })] })] }) }) }), _jsx("div", { id: "tree", className: styles.tree, children: _jsxs("div", { className: styles.entry, children: [_jsx("span", { className: styles.dropdown, onClick: () => openPopup(findRoundByNumberAndPosition(3, 2)), children: selectedPlayers['player_2_12345678'] }), _jsxs("div", { className: styles.branch, children: [_jsxs("div", { className: styles.entry, children: [_jsx("span", { className: styles.dropdown, onClick: () => openPopup(findRoundByNumberAndPosition(2, 3)), children: selectedPlayers['player_2_1234'] }), _jsxs("div", { className: styles.branch, children: [_jsxs("div", { className: styles.entry, children: [_jsx("span", { className: styles.dropdown, onClick: () => openPopup(rounds[4]), children: selectedPlayers['player_2_12'] }), _jsxs("div", { className: styles.branch, children: [_jsx("div", { className: styles.entry, children: _jsx("span", { children: _jsx("input", { type: "text", id: "input_2_1", placeholder: "player 1", value: inputValues.input_2_1, onChange: handleInputChange }) }) }), _jsx("div", { className: styles.entry, children: _jsx("span", { children: _jsx("input", { type: "text", id: "input_2_2", placeholder: "player 2", value: inputValues.input_2_2, onChange: handleInputChange }) }) })] })] }), _jsxs("div", { className: styles.entry, children: [_jsx("span", { className: styles.dropdown, onClick: () => openPopup(rounds[5]), children: selectedPlayers['player_2_34'] }), _jsxs("div", { className: styles.branch, children: [_jsx("div", { className: styles.entry, children: _jsx("span", { children: _jsx("input", { type: "text", id: "input_2_3", placeholder: "player 3", value: inputValues.input_2_3, onChange: handleInputChange }) }) }), _jsx("div", { className: styles.entry, children: _jsx("span", { children: _jsx("input", { type: "text", id: "input_2_4", placeholder: "player 4", value: inputValues.input_2_4, onChange: handleInputChange }) }) })] })] })] })] }), _jsxs("div", { className: styles.entry, children: [_jsx("span", { className: styles.dropdown, onClick: () => openPopup(findRoundByNumberAndPosition(2, 4)), children: selectedPlayers['player_2_5678'] }), _jsxs("div", { className: styles.branch, children: [_jsxs("div", { className: styles.entry, children: [_jsx("span", { ref: dancerRef, className: styles.dropdown, onClick: () => openPopup(rounds[6]), children: selectedPlayers['player_2_56'] }), _jsxs("div", { className: styles.branch, children: [_jsx("div", { className: styles.entry, children: _jsx("span", { children: _jsx("input", { type: "text", id: "input_2_5", placeholder: "player 5", value: inputValues.input_2_5, onChange: handleInputChange }) }) }), _jsx("div", { className: styles.entry, children: _jsx("span", { children: _jsx("input", { type: "text", id: "input_2_6", placeholder: "player 6", value: inputValues.input_2_6, onChange: handleInputChange }) }) })] })] }), _jsxs("div", { className: styles.entry, children: [_jsx("span", { className: styles.dropdown, onClick: () => openPopup(rounds[7]), children: selectedPlayers['player_2_78'] }), _jsxs("div", { className: styles.branch, children: [_jsx("div", { className: styles.entry, children: _jsx("span", { children: _jsx("input", { type: "text", id: "input_2_7", placeholder: "player 7", value: inputValues.input_2_7, onChange: handleInputChange }) }) }), _jsx("div", { className: styles.entry, children: _jsx("span", { children: _jsx("input", { type: "text", id: "input_2_8", placeholder: "player 8", value: inputValues.input_2_8, onChange: handleInputChange }) }) })] })] })] })] })] })] }) })] }), isPopupOpen && (_jsx(Modal, { isOpen: isPopupOpen, onClose: () => setIsPopupOpen(false), children: _jsx(Battle, { round: selectedRound, battleId: battleId }) }))] }));
};
