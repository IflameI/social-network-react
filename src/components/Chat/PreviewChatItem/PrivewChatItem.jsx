import s from './../Chat.module.css';
import {NavLink} from "react-router-dom";


const ChatItemPreview = (props) => {
    let path = "/chat/" + props.id;
    return (
        <li>
            <NavLink to={path} className={s.item + ' ' + s.active}>
                <div className={s.image}>
                    <img src="https://themified.com/friend-finder/images/users/user-2.jpg" alt=""/>
                </div>
                <div className={s.previewMessage}>
                    <h6 className={s.name}>{props.ChatName}</h6>
                    <p className={s.previewText}>{props.PreviewText}</p>
                    <small className={s.time}>{props.MessageTime}</small>
                    <div className={s.alert}>1</div>
                </div>
            </NavLink>
        </li>
    )
}
export default ChatItemPreview;