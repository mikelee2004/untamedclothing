import './Header.css'
import logo from './../../img/svgs/logo.svg'

function Header () {
    return (
        <header className="header">
            <div className="container">
                <div className="header__row">
                    <div className="header_logo">
                        <a href="@"><img src={logo} alt="Logo" /></a>
                    </div>
                    <nav className="header__nav">
                        <ul>
                            <li><a href="#!">CLOTHES</a></li>
                            <li><a href="#!">SHOES</a></li>
                            <li><a href="#!">MAGAZINES</a></li>
                            <li><a href="#!">ABOUT US</a></li>
                            <li><a href="#!" className="header__btn">SIGN UP</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header 