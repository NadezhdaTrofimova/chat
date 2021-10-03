import React from "react";
import styles from './MessagesPage.module.css'
import iconSettings from '../../image/icons/icon-gear.png'
import iconUser from '../../image/usersPhoto/icon-user1.png'
import Header from "../../components/header/Header";
import MessageField from "../../components/messageField/MessageField";

const MessagesPage = () => {

    return (
        <>
            <Header
                iconUser={iconUser}
                iconVariable={iconSettings}
                title='Настройки'
            />
            <div className={styles.messageContainer}>
                <MessageField/>
            </div>
        </>
    )
}

export default MessagesPage