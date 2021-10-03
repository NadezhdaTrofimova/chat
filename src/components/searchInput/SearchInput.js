import React from 'react';
import styles from './SearchInput.module.css'
import iconButton from "../../image/largeInputIcons/icon-magnifier.png";

const SearchInput = () => {
    return (
        <div className={styles.containerWrapper}>
            <div className={styles.container}>
                <div className={styles.inputContainer}>
                    <input className={styles.textInput} type="text" placeholder='Поиск чата'/>
                </div>
                <div className={styles.buttonContainer}>
                    <img src={iconButton} alt="button-icon" className={styles.buttonIcon}/>
                    <p className={styles.buttonTitle}>Найти</p>
                </div>
            </div>
        </div>
    );
};

export default SearchInput;