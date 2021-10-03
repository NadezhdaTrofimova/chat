import React from 'react';
import styles from './Large.module.css'

const LargeInput = ({title, buttonContent}) => {
    return (
        <div className={styles.containerWrapper}>
            <div className={styles.container}>
                <div className={styles.inputContainer}>
                    <input className={styles.textInput} type="text" placeholder={title}/>
                </div>
                {buttonContent}
            </div>
        </div>
    );
};

export default LargeInput;