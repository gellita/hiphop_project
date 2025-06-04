import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styles from './index.module.sass';
import { Field, Form, Formik } from "formik";
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import { createBattle } from "../../services/battle.service";
export const CreateBattlePage = ({ eventId, onClose }) => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    const [newParticipant, setNewParticipant] = useState('');
    const [participants, setParticipants] = useState([]);
    const initialValues = {
        name: "",
        eventId: "",
        nominationId: "",
        participants: [""],
    };
    const handleAdd = () => {
        if (newParticipant.trim()) {
            setParticipants([...participants, newParticipant.trim()]);
            setNewParticipant('');
        }
    };
    const handleRemove = (index) => {
        const updated = [...participants];
        updated.splice(index, 1);
        setParticipants(updated);
    };
    const handleCreate = (formValue) => {
        const { name, nominationId } = formValue;
        // window.alert(nominationId)
        console.log("eventId: " + eventId + "participants: " + participants.values());
        console.log(participants.length);
        participants.forEach((value) => {
            console.log(value);
        });
        setLoading(true);
        createBattle(name, Number(eventId), Number(nominationId), participants).then(() => {
            setLoading(false);
            onClose(); // Закрываем модалку
            navigate("/event/" + eventId);
            window.location.reload();
            // navigate("/");
        }, (error) => {
            window.alert("alert!!!");
            const resMessage = (error.response?.data?.message) ||
                error.message ||
                error.toString();
            setLoading(false);
            setMessage(resMessage);
        });
    };
    return (_jsx(Formik, { initialValues: initialValues, onSubmit: handleCreate, children: _jsxs(Form, { className: styles.form, children: [_jsx("div", { className: styles.form__title, children: "\u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u0431\u0430\u0442\u043B\u043E\u0432" }), _jsx("div", { className: styles.form__group, children: _jsx(Field, { name: "name", type: "text", className: styles.form__control, placeholder: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435" }) }), _jsx("div", { className: styles.form__group, children: _jsxs(Field, { as: "select", name: "nominationId", className: styles.form__control, children: [_jsx("option", { value: "", children: "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043D\u043E\u043C\u0438\u043D\u0430\u0446\u0438\u044E" }), _jsx("option", { value: "1", children: "top-16" }), _jsx("option", { value: "2", children: "top-8" })] }) }), _jsxs("div", { style: { marginTop: '20px' }, children: [_jsx("label", { children: "\u0423\u0447\u0430\u0441\u0442\u043D\u0438\u043A\u0438:" }), _jsxs("div", { style: { display: 'flex', gap: '10px', marginBottom: '10px' }, children: [_jsx("input", { type: "text", value: newParticipant, onChange: (e) => setNewParticipant(e.target.value), placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0443\u0447\u0430\u0441\u0442\u043D\u0438\u043A\u0430" }), _jsx("button", { type: "button", onClick: handleAdd, children: "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C" })] }), _jsx("ul", { children: participants.map((p, index) => (_jsxs("li", { children: [p, _jsx("button", { type: "button", onClick: () => handleRemove(index), style: { marginLeft: '10px' }, children: "\u274C" })] }, index))) })] }), _jsx("div", { className: styles.form__group, children: _jsxs("button", { type: "submit", className: styles.login__btn, disabled: loading, children: [loading && _jsx("span", { className: styles.spinner__border }), _jsx("span", { children: "\u0421\u043E\u0437\u0434\u0430\u0442\u044C" })] }) }), message && (_jsx("div", { className: styles.alert__danger, children: message }))] }) }));
};
