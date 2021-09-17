import styles from './Form.module.css'
import Input from "../input/Input";
import Button from "../button/Button";

const Form = ({optionsInput, titleButton, bottomForm}) => {

    return (
        <form className={styles.form}>
            <Input optionsInput={optionsInput}/>
            <Button titleButton={titleButton}/>
            {bottomForm}
        </form>
    )
}

export default Form