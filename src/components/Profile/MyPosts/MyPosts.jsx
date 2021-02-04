import React from 'react'
import Post from './Post/Post'
import s from './MyPosts.module.css'
import PostAddFormRedux from './MyPostsForm'

const MyPosts = (props) => {
  console.log('Render')
  let postsElements = props.posts.map((p) => (
    <Post
      name={p.name}
      id={p.id}
      comment={p.comment}
      likesCount={p.likesCount}
      dislikesCount={p.dislikesCount}
      key={p.id}
    />
  ))
  let addNewPost = (values) => {
    props.addPost(values.newPostText)
  }
  return (
    <div>
      <div className={s.create}>
        <div className={s.createRow}>
          <div className={`${s.createColumnB} ${s.createColumnD}`}>
            <div className={s.rowDef}>
              <div className="create-posts__img">
                <img
                  src="https://mahmoudarafat.github.io/friends/FRIENDS_files/2017-06-221498139823-1498139823.7302.jpeg"
                  alt=""
                  className={s.createImg}
                />
              </div>
              <PostAddFormRedux onSubmit={addNewPost} />
            </div>
          </div>
        </div>
      </div>
      {postsElements}
    </div>
  )
}
export default MyPosts
