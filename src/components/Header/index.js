import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styles from './index.module.sass';
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import * as AuthService from "../../services/auth.service";
import EventBus from "../../common/EventBus.ts";
import { Modal } from "../Modal";
import { CreateEventPage } from "../../pages"; // импорт модального компонента
export const Header = () => {
    const [showAdminBoard, setShowAdminBoard] = useState(false);
    const [showLogout, setShowLogout] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    useEffect(() => {
        const user = AuthService.getCurrentUser();
        if (user) {
            setShowAdminBoard(user.roles.includes("ROLE_MC", "ROLE_ADMIN"));
            setShowLogout(true);
        }
        EventBus.on("logout", logOut);
        return () => {
            EventBus.remove("logout", logOut);
        };
    }, []);
    const logOut = () => {
        AuthService.logout();
        setShowAdminBoard(false);
        setShowLogout(false);
    };
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    return (_jsxs("header", { className: styles.header, children: [_jsxs("nav", { className: styles.header__nav, children: [_jsx(Link, { to: "/", className: styles.logo, children: _jsxs("div", { className: styles.logo__text, children: [_jsx("div", { className: styles.logo__text__hh, children: "HIP-HOP" }), _jsx("div", { className: styles.logo__text__ch, children: "chronicles" })] }) }), _jsxs("div", { className: styles.header__nav__btn, children: [showAdminBoard && (_jsxs("div", { className: styles.dropdown, children: [_jsx(Link, { to: "", className: styles.dropbtn, children: "\u0414\u043B\u044F \u041C\u0421" }), _jsxs("div", { className: styles.dropdown__content, children: [_jsx(Link, { to: "/", children: "\u0421\u0435\u043B\u0435\u043A\u0442\u044B" }), _jsx(Link, { to: "/battles", children: "\u0411\u0430\u0442\u0442\u043B\u044B 1\u04451" }), _jsx(Link, { to: "/BattleGrid", children: "\u0422\u0443\u0440\u043D\u0438\u0440\u043D\u0430\u044F \u0442\u0430\u0431\u043B\u0438\u0446\u0430" }), _jsx("button", { onClick: openModal, className: styles.modalButton, children: "\u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u0441\u043E\u0431\u044B\u0442\u0438\u044F" })] })] })), _jsxs("div", { className: styles.dropdown, children: [!showLogout && _jsx(Link, { to: "/login", children: "\u0412\u0445\u043E\u0434" }), showLogout && _jsx(Link, { to: "/", onClick: logOut, children: "\u0412\u044B\u0439\u0442\u0438 \u0438\u0437 \u0430\u043A\u043A\u0430\u0443\u043D\u0442\u0430" })] }), _jsx("div", { className: styles.header__nav__btn__calendar, children: _jsx(Link, { to: "/Calendar", className: styles.nav__text, children: "\u041A\u0430\u043B\u0435\u043D\u0434\u0430\u0440\u044C" }) })] })] }), isModalOpen && (_jsx(Modal, { onClose: closeModal, children: _jsx(CreateEventPage, { onClose: closeModal }) }))] }));
};
