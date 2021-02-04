import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.postWrapper}>
            <div className="main-content__post">
                <div className={s.mainWrapper}>
                    <div className="main-content__top top-main">
                        <div className={s.rowDef}>
                            <div className={s.topColumnS}>
                                <img
                                    src="https://mahmoudarafat.github.io/friends/FRIENDS_files/2017-06-221498139823-1498139823.7302.jpeg"
                                    alt=""/>
                            </div>
                            <div className={s.topColumnB}>
                                <div className={s.topItem}>
                                    <h5 className="top-main__name">
                                        <a href="timeline.html" className={s.profileL}>{props.name}</a>
                                        <span className={s.follow}>following</span>
                                    </h5>
                                    <div className={s.textGray}>Published a photo about 15 mins ago
                                    </div>
                                    <div className={s.reaction}>
                                        <a className="top-main__like">
                                            <img
                                                src="https://lh3.googleusercontent.com/proxy/k7o7pB4_D0fAorLHICaefcBd9vvqrz8CUayDaWULQ6bUa3v6sIhd3GsRRsTNkfeNuLMMqEBcQR8bq8Oi6YsP0nJJHzAOwWH0KT_jklEd1iY4PVbPoEJAF4MMXHgZk6w"
                                                alt=""/>
                                            <span className={s.like}>{props.likesCount}</span>
                                        </a>
                                        <a className="top-main__dis">
                                            <img
                                                src="https://www.meme-arsenal.com/memes/0ff82b054aed00c5f7bda0e95c5c80e8.jpg"
                                                alt=""/>
                                            <span className={s.dislike}>{props.dislikesCount}</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={s.commentWrapper}>
                        <div className={s.commentText}>
                            {props.comment}
                        </div>
                        <div className={s.commentContent}>
                            <img src="https://themified.com/friend-finder/images/users/user-11.jpg"
                                 alt=""/>
                            <textarea name="texts" id="exampleTextarea" cols="20" rows="1"
                                      className={s.commentForm}
                                      placeholder="Post a comment"></textarea>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Post;