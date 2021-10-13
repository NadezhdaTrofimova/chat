import React from 'react';
import styles from './InputSettings.module.css'
import iconEditInput from "../../../image/icons/icon-pencil.png";

const InputSettings = ({placeholder, value, onChange, edit, type}) => {
    return (

            <div className={styles.inputContainer}>
                <input
                    className={styles.input}
                    type={type}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    disabled={!edit}
                    required
                />
                <img
                    src={iconEditInput}
                    alt="icon-edit"
                    className={`${edit ? styles.imageEdit : styles.unVisibleImageEdit}`}
                />
            </div>
    );
};

export default InputSettings;