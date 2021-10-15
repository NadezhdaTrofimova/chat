import React from 'react';
import styles from './ButtonSettings.module.css'

const ButtonSettings = ({onClick, textButton}) => {
    return (
        <button
            className={styles.button}
            onClick={onClick}>
            {textButton}
        </button>
    );
};

export default ButtonSettings;