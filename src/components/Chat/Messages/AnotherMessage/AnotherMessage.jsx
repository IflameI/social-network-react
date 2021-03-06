import s from './../../Chat.module.css';

const AnotherMessage = (props) => {
    return (
        <div className={s.left}>
            <div className={s.image}>
                <img src="https://themified.com/friend-finder/images/users/user-2.jpg" alt=""/>
            </div>
            <div className={s.itemMessage}>
                <div className={s.head}>
                    <h5 className={s.nameMessage}>{props.ChatName}</h5>
                    <small className={s.dateMessage}>{props.MessageTime}</small>
                </div>
                <p className={s.textMessage}>{props.Text}</p>
            </div>
        </div>
    )
}

export default AnotherMessage;