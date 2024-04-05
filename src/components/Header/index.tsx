import './index.sass'

export const Header = () => {
    return (
        <header className="header">
            <nav className="header__nav">
                {/*комонент лого, пока просто div logo*/}
                {/*<Logo/>*/}
                <div className="logo"></div>
                <div className="header__nav__btn">
                    <div className="dropdown">
                        <div className="dropbtn">Баттлы</div>
                        <div className="dropdown-content">
                            <a href="#">Селекты</a>
                            <a href="#">Баттлы 1х1</a>
                            <a href="#">Турнирная таблица</a>
                        </div>
                    </div>
                    <div className="header__nav__btn__calendar">
                        <li className="nav__text">Календарь</li>
                    </div>

                </div>
            </nav>
        </header>
    );
};