import React from 'react';
import styles from './MessageItem.module.css'

const MessageItem = ({textMessage, timeTitle, photoUser, isMyAccount}) => {


    return (
        <>
            <li>
                <div className={`${isMyAccount ? styles.myItemContainer : styles.itemContainer}`}>
                    <div className={`${isMyAccount ? styles.myAvatarContainer : styles.avatarContainer}`}>
                        <img
                            className={`${isMyAccount ? styles.myUserAvatar : styles.userAvatar}`}
                            alt="avatar-user"
                            src={photoUser}
                        />
                        <span className={`${isMyAccount ? styles.myTimeTitle : styles.timeTitle}`}>{timeTitle}</span>
                    </div>
                    <div className={`${isMyAccount ? styles.myContainerMessage : styles.containerMessage}`}>
                        <p className={styles.messageText}>{textMessage}</p>
                    </div>
                </div>
            </li>
        </>
    );
};

export default MessageItem;