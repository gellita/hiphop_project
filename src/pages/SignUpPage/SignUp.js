import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
// import { signup } from "../../services/auth.service";
import styles from './index.module.sass';
export const SignUp = (props) => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    const initialValues = {
        username: "",
        email: "",
        password: "",
    };
    const validationSchema = Yup.object().shape({
        username: Yup.string()
            .required('Имя пользователя обязательно'),
        email: Yup.string()
            .email('Некорректный email')
            .required('Email обязателен'),
        password: Yup.string()
            .min(6, 'Пароль должен быть не менее 6 символов')
            .required('Пароль обязателен'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Пароли должны совпадать')
            .required('Подтверждение пароля обязательно'),
    });
    const handleRegister = (formValue) => {
        const { username, email, password } = formValue;
        navigate("/role", {
            state: {
                username,
                email,
                password,
            },
        });
    };
    return (_jsxs("div", { className: styles.login, children: [_jsx("div", { className: styles.background, children: _jsx("img", { src: "./src/assets/Images/homepage/vector.png", className: styles.home__vectorimg, alt: "vector image" }) }), _jsx("div", { className: styles.login__card__container, children: _jsx(Formik, { initialValues: initialValues, validationSchema: validationSchema, onSubmit: handleRegister, children: _jsxs(Form, { children: [_jsx("a", { className: styles.form__text, children: "\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F" }), _jsxs("div", { className: styles.form__group, children: [_jsx("label", { htmlFor: "username" }), _jsx(Field, { name: "username", type: "text", className: styles.form__control, placeholder: "\u0418\u043C\u044F \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F" }), _jsx(ErrorMessage, { name: "username", component: "div", className: styles.alert__danger })] }), _jsxs("div", { className: styles.form__group, children: [_jsx("label", { htmlFor: "email" }), _jsx(Field, { name: "email", type: "email", className: styles.form__control, placeholder: "Email" })] }), _jsxs("div", { className: styles.form__group, children: [_jsx("label", { htmlFor: "password" }), _jsx(Field, { name: "password", type: "password", className: styles.form__control, placeholder: "\u041F\u0430\u0440\u043E\u043B\u044C" }), _jsx(ErrorMessage, { name: "password", component: "div", className: styles.alert__danger })] }), _jsxs("div", { className: styles.form__group, children: [_jsx("label", { htmlFor: "confirmPassword" }), _jsx(Field, { name: "confirmPassword", type: "password", className: styles.form__control, placeholder: "\u041F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u0435 \u043F\u0430\u0440\u043E\u043B\u044C" }), _jsx(ErrorMessage, { name: "confirmPassword", component: "div", className: styles.alert__danger })] }), _jsx("div", { className: styles.form__group, children: _jsxs("button", { type: "submit", className: styles.login__btn, disabled: loading, children: [loading && (_jsx("span", { className: styles.spinner__border })), _jsx("span", { children: "\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C\u0441\u044F" })] }) }), _jsx(Link, { to: "/login", className: "login", children: "\u0412\u043E\u0439\u0442\u0438" }), message && (_jsx("div", { className: styles.form__group, children: _jsx("div", { className: styles.alert__danger, children: message }) }))] }) }) })] }));
};
