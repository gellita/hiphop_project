import styles from './index.module.sass'
import {Link} from 'react-router-dom'
import {useEffect, useState} from "react";
import * as AuthService from "../../services/auth.service";
import EventBus from "../../common/EventBus.ts";
import {Modal} from "../Modal";
import {CreateEventPage} from "../../pages"; // импорт модального компонента


export const Header = () => {
    const [showAdminBoard, setShowAdminBoard] = useState<boolean>(false);
    const [showLogout, setShowLogout] = useState<boolean>(false);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

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

    return (
        <header className={styles.header}>
            <nav className={styles.header__nav}>
                <Link to="/" className={styles.logo}>
                    <div className={styles.logo__text}>
                        <div className={styles.logo__text__hh}>HIP-HOP</div>
                        <div className={styles.logo__text__ch}>chronicles</div>
                    </div>
                </Link>

                <div className={styles.header__nav__btn}>
                    {showAdminBoard && (
                        <div className={styles.dropdown}>
                            <Link to="" className={styles.dropbtn}>Для МС</Link>
                            <div className={styles.dropdown__content}>
                                <Link to="/">Селекты</Link>
                                <Link to="/battles">Баттлы 1х1</Link>
                                <Link to="/BattleGrid">Турнирная таблица</Link>
                                <button onClick={openModal} className={styles.modalButton}>Создание события</button>
                            </div>
                        </div>
                    )}

                    <div className={styles.dropdown}>
                        {!showLogout && <Link to="/login">Вход</Link>}
                        {showLogout && <Link to="/" onClick={logOut}>Выйти из аккаунта</Link>}
                    </div>

                    <div className={styles.header__nav__btn__calendar}>
                        <Link to="/Calendar" className={styles.nav__text}>Календарь</Link>
                    </div>
                </div>
            </nav>

            {/* Модалка с формой создания */}
            {isModalOpen && (
                <Modal onClose={closeModal}>
                    <CreateEventPage onClose={closeModal} />
                </Modal>
            )}
        </header>
    );
};
