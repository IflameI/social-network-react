import s from './Header.module.css';
import {NavLink} from "react-router-dom";
const Header = (props) => {
    return <header className={s.header}>
        <div className="container">
            <div className={s.row}>
                <div className={s.logo}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/6/6d/Todoist_logo.png" alt=""/>
                </div>
                <div className="menu-icon icon-menu">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <nav className="header-menu">
                    <div className={s.body}>
                        <div className={s.loginBlock}>
                            {props.isAuth
                                ? <div>{props.login} - <button onClick={props.logout}>Log out</button></div>
                                :<NavLink to = {'/login'}>Login</NavLink>
                            }
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    </header>
}
export default Header;