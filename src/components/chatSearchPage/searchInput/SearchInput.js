import React from 'react';

import iconButton from "../../../image/icons/icon-magnifier.png";

import styles from './SearchInput.module.css';


const SearchInput = () => {

    const [inputValue, setInputValue]  = React.useState('')

    const handleOnChangeInput = (e) => {
        setInputValue(e.target.value)
    }

    return (
        <div className={styles.containerWrapper}>
            <div className={styles.container}>
                <div className={styles.inputContainer}>
                    <input
                        value={inputValue}
                        onChange={handleOnChangeInput}
                        className={styles.textInput}
                        type="text"
                        placeholder='Поиск чата'/>
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