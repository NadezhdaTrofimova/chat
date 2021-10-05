import React from 'react';
import styles from './MessageItemSearchPage.module.css'
import photoUser from '../../image/usersPhoto/icon-user3.png'

const MessageItemSearchPage = () => {
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
                    <p className={styles.name}>ФИО пользователя</p>
                    <span className={styles.timeTitle}>12:15</span>
                    <div className={styles.containerMessage}>
                        <p className={styles.messageText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                            do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                            irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
                            anim id est laborum.</p>
                    </div>
                </div>
            </li>
        </>
    );
};

export default MessageItemSearchPage;