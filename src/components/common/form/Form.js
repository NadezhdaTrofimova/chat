import React from "react";

import Input from "../input/Input";
import Button from "../button/Button";

import styles from './Form.module.css'


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