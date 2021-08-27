import styles from './Form.module.css'
import Input from "../input/Input";
import Button from "../button/Button";


const Form = ({optionsInput, setOptionsInput, titleButton}) => {


    return (
        <form className={styles.form}>
            <Input optionsInput={optionsInput} setOptionsInput={setOptionsInput}/>
            <Button titleButton={titleButton}/>
        </form>

    )
}

export default Form