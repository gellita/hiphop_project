import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getEventById } from "../../services/event.service";
import styles from './index.module.sass';
import bg from "../../assets/Images/homepage/vector.png";
import { CreateBattlePage } from "../../pages";
import { Modal } from "../../components/Modal";
import * as AuthService from "../../services/auth.service.ts";
export const EventPage = () => {
    const { id } = useParams();
    const [event, setEvent] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [showAdminBoard, setShowAdminBoard] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    useEffect(() => {
        if (!id)
            return;
        getEventById(BigInt(id))
            .then((data) => {
            setEvent(data);
            setLoading(false);
        })
            .catch(() => {
            setError("Ошибка при загрузке события");
            setLoading(false);
        });
    }, [id]);
    useEffect(() => {
        const user = AuthService.getCurrentUser();
        if (user) {
            setShowAdminBoard(user.roles.includes("ROLE_MC", "ROLE_ADMIN"));
        }
    }, []);
    if (loading)
        return _jsx("div", { className: styles.loader, children: "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430..." });
    if (error)
        return _jsx("div", { className: styles.alert__danger, children: error });
    if (!event)
        return _jsx("div", { children: "\u0421\u043E\u0431\u044B\u0442\u0438\u0435 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E" });
    return (_jsxs("div", { className: styles.event, children: [_jsx("div", { className: styles.background, children: _jsx("img", { src: bg, className: styles.home__vectorimg, alt: "vector background" }) }), _jsxs("div", { className: styles.event__data, children: [_jsx("a", { className: styles.event__title, children: event.name }), _jsxs("a", { children: ["\u0414\u0430\u0442\u0430 ", new Date(event.date).toLocaleDateString()] }), _jsxs("a", { children: ["\u0413\u043E\u0440\u043E\u0434: ", event.city] }), _jsxs("a", { children: ["\u041C\u0435\u0441\u0442\u043E: ", event.place] }), _jsxs("div", { className: styles.event__section, children: [_jsx("h3", { children: "\u0411\u0430\u0442\u0442\u043B\u044B" }), _jsx("ul", { children: event.battles.map((battle) => (_jsx("li", { children: _jsx("a", { href: `/battle/${battle.id}/grid`, children: battle.name }) }, battle.id))) })] }), showAdminBoard && (_jsx("button", { onClick: openModal, className: styles.modalButton, children: "\u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u0431\u0430\u0442\u0442\u043B\u0430" }))] }), isModalOpen && (_jsx(Modal, { onClose: closeModal, children: _jsx(CreateBattlePage, { eventId: id, onClose: closeModal }) }))] }));
};
