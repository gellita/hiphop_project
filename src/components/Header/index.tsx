import styles from './index.module.sass'
import {Link} from 'react-router-dom'

export const Header = () => {
    return (
        <header className={styles.header}>
            <nav className={styles.header__nav}>
                {/*комонент лого, пока просто div logo*/}
                {/*<Logo/>*/}
                <Link to="/" className={styles.logo}></Link>
                <div className={styles.header__nav__btn}>
                    <div className={styles.dropdown}>
                        <Link to="" className={styles.dropbtn}>Баттлы</Link>
                        <div className={styles.dropdown__content}>
                            <Link to="#">Селекты</Link>
                            <Link to="/battles">Баттлы 1х1</Link>
                            <Link to="/BattleGrid">Турнирная таблица</Link>
                        </div>
                    </div>
                    <div className={styles.header__nav__btn__calendar}>
                        <Link to="/calendar" className={styles.nav__text}>Календарь</Link>
                    </div>

                </div>
            </nav>
        </header>
    );
};