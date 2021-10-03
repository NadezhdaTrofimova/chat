import React from 'react';
import styles from './MessageField.module.css'
import iconEmoji from "../../image/largeInputIcons/icon-emoji.png";
import iconAttach from "../../image/largeInputIcons/icon-clip.png";
import iconSendMessage from "../../image/largeInputIcons/icon-paper-plane.png";

const MessageField = () => {
    return (
        <div className={styles.containerWrapper}>
            <div className={styles.container}>
                <div className={styles.inputContainer}>
                    <textarea className={styles.textInput} placeholder='Введите Ваше сообщение'/>
                </div>
                <div className={styles.buttonContainer}>
                    <img className={styles.icon} src={iconEmoji} alt="emoji-icon"/>
                    <img className={styles.icon} src={iconAttach} alt="magnifier-icon"/>
                    <div className={styles.iconSendMessageWrapper}>
                        <img className={styles.icon} src={iconSendMessage} alt="paper-plane-icon"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MessageField;