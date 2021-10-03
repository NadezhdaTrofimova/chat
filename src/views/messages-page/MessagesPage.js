import React from "react";
import styles from './MessagesPage.module.css'
import iconSettings from '../../image/headerIcons/icon-settings.png'
import iconUser from '../../image/headerIcons/icon-user1.png'
import iconEmoji from '../../image/largeInputIcons/icon-emoji.png'
import iconAttach from '../../image/largeInputIcons/icon-clip.png'
import iconSendMessage from '../../image/largeInputIcons/icon-paper-plane.png'
import Header from "../../components/header/Header";
import LargeInput from "../../components/largeInput/LargeInput";

const MessagesPage = () => {

    return (
        <>
            <Header
                iconUser={iconUser}
                iconVariable={iconSettings}
                title='Настройки'
            />
            <div className={styles.inputContainer}>
                <LargeInput
                    className={styles.inputContainer}
                    title='Введите Ваше сообщение'
                    buttonContent={
                        <div className={styles.buttonContainer}>
                            <img className={styles.icon} src={iconEmoji} alt="emoji-icon"/>
                            <img className={styles.icon} src={iconAttach} alt="magnifier-icon"/>
                            <div className={styles.iconSendMessageWrapper}>
                                <img className={styles.icon} src={iconSendMessage} alt="paper-plane-icon"/>
                            </div>
                        </div>
                    }
                />
            </div>
        </>
    )
}

export default MessagesPage