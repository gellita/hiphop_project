import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styles from './index.module.sass';
export const Modal = ({ children, onClose }) => {
    return (_jsx("div", { className: styles.overlay, onClick: onClose, children: _jsxs("div", { className: styles.modal, onClick: e => e.stopPropagation(), children: [_jsx("button", { className: styles.closeButton, onClick: onClose, children: "\u00D7" }), children] }) }));
};
