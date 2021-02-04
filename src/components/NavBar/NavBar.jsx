import s from './NavBar.module.css';
import {NavLink} from "react-router-dom";

const NavBar = () => {
    return (
        <div className="app__columnGeneral app__columnLeft">
            <div className={s.wrapper}>
                <NavLink to="/profile">
               <div className={s.topCard}>
                    <img className={s.img} src="https://themified.com/friend-finder/images/users/user-1.jpg" alt=""/>
                    <div className={s.item}>
                        <h5 className={s.title}>Sarah Cruiz</h5>
                        <div className={s.follow}>
                            <img className={s.imgFollow}
                                 src="https://www.flaticon.com/svg/static/icons/svg/983/983886.svg" alt=""/>1,299
                            followers
                        </div>
                    </div>
                </div>
            </NavLink>
                <nav className={s.navMenu}>
                    <ul className={s.list}>
                        <li>
                            <img className={s.imgFollow}
                                 src="https://www.flaticon.com/svg/static/icons/svg/983/983886.svg"
                                 alt=""/>
                            <NavLink activeClassName={s.activeNav} to="/profile">Profile</NavLink>
                        </li>
                        <li>
                            <img className={s.imgFollow}
                                 src="https://www.flaticon.com/svg/static/icons/svg/983/983886.svg"
                                 alt=""/>
                            <NavLink activeClassName={s.activeNav}  to="/people">Peoples</NavLink>
                        </li>
                        <li>
                            <img className={s.imgFollow}
                                 src="https://www.flaticon.com/svg/static/icons/svg/983/983886.svg"
                                 alt=""/>
                            <NavLink to="/friends">Friends</NavLink>
                        </li>
                        <li>
                            <img className={s.imgFollow}
                                 src="https://www.flaticon.com/svg/static/icons/svg/983/983886.svg"
                                 alt=""/>
                            <NavLink activeClassName={s.activeNav} to="/chat">Messages</NavLink>
                        </li>
                        <li>
                            <img className={s.imgFollow}
                                 src="https://www.flaticon.com/svg/static/icons/svg/983/983886.svg"
                                 alt=""/>
                            <NavLink to="/images">Images</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}
export default NavBar;