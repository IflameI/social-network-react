import React, { useState, useEffect } from 'react'
import s from './ProfileInfo.module.css'
import Preloader from '../../../common/preloader/Preloader'

const ProfileStatusWithHooks = (props) => {
  const [editMode, setEditMode] = useState(false)
  const [status, setStatus] = useState(props.status)

  useEffect(() => {
    setStatus(props.status)
  }, [props.status])

  const activateEditMode = () => {
    setEditMode(true)
  }
  const deactivateEditMode = () => {
    setEditMode(false)
    props.updateStatus(status)
  }
  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value)
  }
  return (
    <div>
      {!editMode && (
        <div className={s.aboutText}>
          <span onDoubleClick={activateEditMode}>
            {props.status || '-----'}
          </span>
        </div>
      )}
      {editMode && (
        <div className={s.aboutText}>
          <input
            onChange={onStatusChange}
            autoFocus={true}
            onBlur={deactivateEditMode}
            value={status}
          ></input>
        </div>
      )}
    </div>
  )
}

export default ProfileStatusWithHooks
