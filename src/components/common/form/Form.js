import React from "react";
import styles from './Form.module.css'
import Input from "../input/Input";
import Button from "../button/Button";

const Form = ({optionsInput, titleButton, bottomForm}) => {


    const handleSubmit = (event) => {
        event.preventDefault()
        // console.log(event.target.value)
    }


    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <Input optionsInput={optionsInput}/>
            <Button type='submit' titleButton={titleButton}/>
            {bottomForm}
        </form>
    )
}

export default Form