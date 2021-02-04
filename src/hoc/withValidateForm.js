import s from "../components/common/formsControls/FormsControls.module.css";

const Element = Element => ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={s.formControl + " " + (hasError ? s.error : "")}>
            <Element {...input} {...props} />
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}
export default Element