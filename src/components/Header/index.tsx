
import styles from './index.module.sass'
import {Link} from 'react-router-dom'
import {useEffect, useState} from "react";
import * as AuthService from "../../services/auth.service";
import EventBus from "../../common/EventBus.ts";
// import classNames from 'classnames'
interface Props {
    reverse?: boolean;
}

export const Header = (props: Props) => {
    const [showAdminBoard, setShowAdminBoard] = useState<boolean>(false);



    useEffect(() => {
        const user = AuthService.getCurrentUser();

        if (user) {
            setShowAdminBoard(user.roles.includes("ROLE_ADMIN"));
        }

        EventBus.on("logout", logOut);

        return () => {
            EventBus.remove("logout", logOut);
        };
    }, []);

    const logOut = () => {
        AuthService.logout();
        setShowAdminBoard(false);
    };
    return (
        <header className={styles.header}>
             {/*<header className = classNames(styles.header, {[styles.header_reverse]: reverse })>*/}

            <nav className={styles.header__nav}>
                <Link to="/" className={styles.logo}>
                    <div className={styles.logo__text}>
                        <div className={styles.logo__text__hh}>HIP-HOP</div>
                        <div className={styles.logo__text__ch}>chronicles</div>
                    </div>
                </Link>





                <div className={styles.header__nav__btn}>
                    {showAdminBoard && (<div className={styles.dropdown}>
                        <Link to="" className={styles.dropbtn}>Для МС</Link>
                        <div className={styles.dropdown__content}>
                            {showAdminBoard && (<Link to="/admin">Сетка для МС</Link>)}
                            <a href="/" className="nav-link" onClick={logOut}>Выйти из аккаунта</a>
                        </div>
                    </div>)}
                    <div className={styles.dropdown}>
                        <Link to="" className={styles.dropbtn}>Баттлы</Link>
                        <div className={styles.dropdown__content}>
                            <Link to="/">Селекты</Link>
                            <Link to="/battles">Баттлы 1х1</Link>
                            <Link to="/BattleGrid">Турнирная таблица</Link>
                        </div>
                    </div>
                    <div className={styles.header__nav__btn__calendar}>

                        <Link to="/Calendar" className={styles.nav__text}>Календарь</Link>

                    </div>

                </div>
            </nav>
        </header>
    );
};