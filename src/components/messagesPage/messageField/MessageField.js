import React from 'react';

import iconEmoji from "../../../image/icons/icon-emoji.png";
import iconAttach from "../../../image/icons/icon-clip.png";
import iconSendMessage from "../../../image/icons/icon-paper-plane.png";

import styles from './MessageField.module.css'

const MessageField = ({handleOnChangeTextArea, textAreaValue, handleSendMessages}) => {

    return (
        <div className={styles.containerWrapper}>
            <div className={styles.container}>
                <div className={styles.inputContainer}>
                    <textarea
                        value={textAreaValue}
                        onChange={handleOnChangeTextArea}
                        className={styles.textInput}
                        placeholder='Введите Ваше сообщение'

                    />
                </div>
                <div className={styles.buttonContainer}>
                    <img
                        className={styles.icon}
                        src={iconEmoji}
                        alt="emoji-icon"
                    />
                    <img
                        className={styles.icon}
                        src={iconAttach}
                        alt="magnifier-icon"
                    />
                    <div className={styles.iconSendMessageWrapper}>
                        <img
                            className={styles.icon}
                            src={iconSendMessage}
                            alt="paper-plane-icon"
                            onClick={handleSendMessages}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MessageField;