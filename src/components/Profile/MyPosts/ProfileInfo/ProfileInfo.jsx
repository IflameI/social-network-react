import React from 'react'
import s from './ProfileInfo.module.css'
import Preloader from '../../../common/preloader/Preloader'
import ProfileStatus from './ProfileStatus'
import ProfileStatusWithHooks from './ProfileStatusWithHooks'

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  }
  return (
    <div className={'top-content'}>
      <div className={s.topMain}>
        <div className="top-content__navbar">
          <div className={s.topRow}>
            <div className={s.columnM}>
              <div className={s.topInfo}>
                <img
                  src={props.profile.photos.large}
                  alt=""
                  className={s.topPhoto}
                />
                <h3 className={s.topName}>{props.profile.fullName}</h3>
              </div>
            </div>
            <div className={s.columnD}>
              <ProfileStatusWithHooks
                status={props.status}
                updateStatus={props.updateStatus}
              />
              <ul className={s.topFollow}>
                <li>
                  <button className="btn-primary">Add Friend</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ProfileInfo
