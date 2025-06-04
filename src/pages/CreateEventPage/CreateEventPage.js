import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styles from './index.module.sass';
import { Field, Form, Formik } from "formik";
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import { createEvent } from "../../services/event.service";
export const CreateEventPage = ({ onClose }) => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    const initialValues = {
        name: "",
        city: "",
        place: "",
        date: "",
    };
    const handleCreate = (formValue) => {
        const { name, city, place, date } = formValue;
        setLoading(true);
        createEvent(name, new Date(date), city, place).then((data) => {
            setLoading(false);
            onClose(); // Закрываем модалку
            navigate("/event/" + data.id);
        }, (error) => {
            const resMessage = (error.response?.data?.message) ||
                error.message ||
                error.toString();
            setLoading(false);
            setMessage(resMessage);
        });
    };
    return (_jsx(Formik, { initialValues: initialValues, onSubmit: handleCreate, children: _jsxs(Form, { className: styles.form, children: [_jsx("div", { className: styles.form__title, children: "\u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u0441\u043E\u0431\u044B\u0442\u0438\u044F" }), _jsx("div", { className: styles.form__group, children: _jsx(Field, { name: "name", type: "text", className: styles.form__control, placeholder: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435" }) }), _jsx("div", { className: styles.form__group, children: _jsx(Field, { name: "city", type: "text", className: styles.form__control, placeholder: "\u0413\u043E\u0440\u043E\u0434" }) }), _jsx("div", { className: styles.form__group, children: _jsx(Field, { name: "place", type: "text", className: styles.form__control, placeholder: "\u041C\u0435\u0441\u0442\u043E" }) }), _jsx("div", { className: styles.form__group, children: _jsx(Field, { name: "date", type: "date", className: styles.form__control }) }), _jsx("div", { className: styles.form__group, children: _jsxs("button", { type: "submit", className: styles.login__btn, disabled: loading, children: [loading && _jsx("span", { className: styles.spinner__border }), _jsx("span", { children: "\u0421\u043E\u0437\u0434\u0430\u0442\u044C" })] }) }), message && (_jsx("div", { className: styles.alert__danger, children: message }))] }) }));
};
