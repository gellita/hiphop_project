import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import { Formik, Form } from "formik";
import { signup } from "../../services/auth.service";
import styles from './index.module.sass';
export const Role = (props) => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    const location = useLocation();
    const { username, email, password } = location.state || {};
    const handleRegisterMC = () => {
        setMessage("");
        setLoading(true);
        console.log(username, email, password);
        signup(username, email, ["mc"], password).then(() => {
            navigate("/");
            window.location.reload();
        }, (error) => {
            const resMessage = (error.response &&
                error.response.data &&
                error.response.data.message) ||
                error.message ||
                error.toString();
            setLoading(false);
            setMessage(resMessage);
        });
    };
    const handleRegisterViewer = () => {
        setMessage("");
        setLoading(true);
        console.log(username, email, password);
        signup(username, email, ["viewer"], password).then(() => {
            navigate("/");
            window.location.reload();
        }, (error) => {
            const resMessage = (error.response &&
                error.response.data &&
                error.response.data.message) ||
                error.message ||
                error.toString();
            setLoading(false);
            setMessage(resMessage);
        });
    };
    return (_jsxs("div", { className: styles.login, children: [_jsx("div", { className: styles.background, children: _jsx("img", { src: "./src/assets/Images/homepage/vector.png", className: styles.home__vectorimg, alt: "vector image" }) }), _jsx("div", { className: styles.login__card__container, children: _jsx(Formik, { children: _jsxs(Form, { children: [_jsx("div", { className: styles.form__group, children: _jsxs("button", { type: "button", onClick: handleRegisterMC, className: styles.login__btn, disabled: loading, children: [loading && (_jsx("span", { className: styles.spinner__border })), _jsx("span", { children: "mc" })] }) }), _jsx("div", { className: styles.form__group, children: _jsxs("button", { type: "button", onClick: handleRegisterViewer, className: styles.login__btn, disabled: loading, children: [loading && (_jsx("span", { className: styles.spinner__border })), _jsx("span", { children: "no mc" })] }) }), message && (_jsx("div", { className: styles.form__group, children: _jsx("div", { className: styles.alert__danger, children: message }) }))] }) }) })] }));
};
