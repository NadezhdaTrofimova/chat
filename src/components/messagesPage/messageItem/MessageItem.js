import React from 'react';
import styles from './MessageItem.module.css'

const MessageItem = ({textMessage, timeTitle, photoUser}) => {
    return (
        <>
            <li>
                <div className={styles.itemContainer}>
                    <div className={styles.avatarContainer}>
                        <img
                            className={styles.userAvatar}
                            alt="photo-user"
                            src={photoUser}
                        />
                    </div>
                    <span className={styles.timeTitle}>{timeTitle}</span>
                    <div className={styles.containerMessage}>
                        <p className={styles.messageText}>{textMessage}</p>
                    </div>
                </div>
            </li>
        </>
    );
};

export default MessageItem;