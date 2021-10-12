import React from 'react';
import styles from './LastMessage.module.css'


const LastMessage = ({chatsTitle, textMessage, timeTitle, photoUser}) => {
    return (
        <>
            <li>
                <div className={styles.itemContainer}>
                    <div className={styles.avatarContainer}>
                        <img
                            className={styles.userAvatar}
                            alt="avatar-user"
                            src={photoUser}
                        />
                    </div>
                    <p className={styles.name}>{chatsTitle}</p>
                    <span className={styles.timeTitle}>{timeTitle}</span>
                    <div className={styles.containerMessage}>
                        <p className={styles.messageText}>{textMessage}</p>
                    </div>
                </div>
            </li>
        </>
    );
};

export default LastMessage;