import s from './Follow.module.css';

const Follow = (props) => {
    return (
        <div className={s.rightItem}>
            <div className={s.photo}><img src="https://themified.com/friend-finder/images/users/user-11.jpg" alt=""/></div>
            <div className={s.follows}>
               <a href="#" className="rightName">{props.rightName}</a>
              <div className={s.add}>Add friend</div>
            </div>
        </div>
    )
}
export default Follow;