import React from "react";
import s from "./MyPosts.module.css";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import Element from "../../../hoc/withValidateForm";

const Textarea = Element("textarea");

const maxLength10 = maxLengthCreator(10);

const PostAddForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={s.createText}>
            <Field component={Textarea} validate={[required,maxLength10]} name="newPostText" value = {props.newPostText} className={s.commentForm} cols ="30" row = "1" placeholder="Write what you wish"/>
            <div className={s.createSmall}>
                <div className="create-posts__button">
                    <button className="btn-primary">Publish</button>
                </div>
            </div>
        </form>
    )
}
const PostAddFormRedux = reduxForm({form: "ProfileAddNewPostForm"})(PostAddForm);

export default PostAddFormRedux