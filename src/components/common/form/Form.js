import React from "react";
import styles from './Form.module.css'
import Input from "../input/Input";
import Button from "../button/Button";

const Form = ({optionsInput, titleButton, bottom, onSubmit}) => {



    return (
        <form className={styles.form} onSubmit={onSubmit}>
            <Input optionsInput={optionsInput}/>
            <Button type='submit' titleButton={titleButton}/>
            {bottom}
        </form>
    )
}

export default Form