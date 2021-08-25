import styles from './Form.module.css'
import Input from "../input/Input";
import Button from "../button/Button";


const Form = ({optionsInput}) => {


    const titleRegButton = {title: 'Зарегистрироваться'}


    return (
        <form className={styles.form}>
            <Input optionsInput={optionsInput}/>
            <Button titleButton={titleRegButton}/>
        </form>

    )
}

export default Form