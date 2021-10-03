import React from "react";
import styles from './SearchChatPage.module.css'
import iconButton from './../../image/largeInputIcons/icon-magnifier.png'
import Header from "../../components/header/Header";
import iconSettings from '../../image/headerIcons/icon-settings.png'
import iconUser from '../../image/headerIcons/icon-user1.png'
import LargeInput from "../../components/largeInput/LargeInput";

const SearchChatPage = () => {

    return (
        <>
            <Header
                iconUser={iconUser}
                iconVariable={iconSettings}
                title='Настройки'
            />
            <div className={styles.inputContainer}>
                <LargeInput
                    title='Поиск чата'
                    buttonContent={
                        <div className={styles.buttonContainer}>
                            <img src={iconButton} alt="button-icon" className={styles.buttonIcon}/>
                            <p className={styles.buttonTitle}>Найти</p>
                        </div>
                    }
                />
            </div>
        </>
    )
}

export default SearchChatPage