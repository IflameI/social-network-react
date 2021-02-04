import React from 'react'
import s from './Peoples.module.css'
import userPhoto from '../../assets/images/user.png'
import { NavLink } from 'react-router-dom'

const User = ({ user, followingInProgress, unfollow, follow }) => {
  return (
    <>
      <div className={s.row}>
        <div className={s.item}>
          <div className={s.itemRow}>
            <div className={s.columnB}>
              <div className={s.avatar}>
                <NavLink to={'/profile/' + user.id}>
                  <img
                    src={
                      user.photos.small != null ? user.photos.small : userPhoto
                    }
                    alt=""
                  ></img>
                </NavLink>
              </div>
              <div className={s.content}>
                <div className={s.name}>{user.name}</div>
                <div className={s.status}>{user.status}</div>
                <div className={s.place}>
                  <div className={s.city}>{'user.location.city'}</div>
                  <div className={s.country}>{'user.location.country'}</div>
                </div>
              </div>
            </div>
            <div className={s.columnS}>
              <div className={s.follow}>
                {user.isFollow ? (
                  <button
                    disabled={followingInProgress.some((id) => id === user.id)}
                    onClick={() => {
                      unfollow(user.id)
                    }}
                    className="btn-primary"
                  >
                    Unfollow
                  </button>
                ) : (
                  <button
                    disabled={followingInProgress.some((id) => id === user.id)}
                    onClick={() => {
                      follow(user.id)
                    }}
                    className="btn-primary"
                  >
                    Follow
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default User
