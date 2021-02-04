import s from "./Chat.module.css";
import {Field, reduxForm} from "redux-form";
import React from "react";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import Element from "../../hoc/withValidateForm";

const Textarea = Element("textarea");
const maxLength50 = maxLengthCreator(50);

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={s.inputItem}>
            <Field component={Textarea} validate={[required,maxLength50]} name ="newMessageText" className={s.formControl}
                   placeholder="Type your message"/>
            <span className="input-group-btn">
                        <button className={s.formBtn}>Send</button>
                      </span>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({form: "chatAddMessageForm"})(AddMessageForm);

export default AddMessageFormRedux
