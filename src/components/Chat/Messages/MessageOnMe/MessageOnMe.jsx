import s from './../../Chat.module.css';

const MessageOnMe = (props) => {
    return (
        <div className={s.right}>
            <div className={s.itemMessage}>
                <div className={s.head}>
                    <h5 className={s.nameMessage}>{props.ChatName}</h5>
                    <small className={s.dateMessage}>{props.MessageTime}</small>
                </div>
                <p className={s.textMessage}>{props.Text}</p>
            </div>
            <div className={s.image}>
                <img src="https://themified.com/friend-finder/images/users/user-1.jpg" alt=""/>
            </div>
        </div>
    )
}
export default MessageOnMe;