import './index.sass'
import {Link} from 'react-router-dom'

export const Header = () => {
    return (
        <header className="header">
            <nav className="header__nav">
                {/*комонент лого, пока просто div logo*/}
                {/*<Logo/>*/}
                <Link to="/" className="logo"></Link>
                <div className="header__nav__btn">
                    <div className="dropdown">
                        <Link to="" className="dropbtn">Баттлы</Link>
                        <div className="dropdown-content">
                            <Link to="#">Селекты</Link>
                            <Link to="/Battle1x1">Баттлы 1х1</Link>
                            <Link to="/BattleGrid">Турнирная таблица</Link>
                        </div>
                    </div>
                    <div className="header__nav__btn__calendar">
                        <Link to="/Calendar" className="nav__text">Календарь</Link>
                    </div>

                </div>
            </nav>
        </header>
    );
};