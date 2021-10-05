import React from "react";
import styles from './MessagesPage.module.css'
import iconSettings from '../../image/icons/icon-gear.png'
import iconUser from '../../image/usersPhoto/icon-user1.png'
import Header from "../../components/header/Header";
import MessageField from "../../components/messageField/MessageField";
import MessageItemSearchPage from "../../components/messageItemSearchPage/MessageItemSearchPage";
import MessageItemMessagesPage from "../../components/messageItemMessagesPage/MessageItemMessagesPage";

const MessagesPage = () => {

    return (
        <>
            <div className={styles.searchChatPage}>
                <Header
                    iconUser={iconUser}
                    iconVariable={iconSettings}
                    title='Настройки'
                />
                <div className={styles.messageMainContainer}>
                    <ul className={styles.messageContainer}>
                        <MessageItemMessagesPage/>
                        <MessageItemMessagesPage/>
                        <MessageItemMessagesPage/>
                        <MessageItemMessagesPage/>
                        <MessageItemMessagesPage/>
                        <MessageItemMessagesPage/>
                    </ul>

                        <MessageField/>
                </div>
            </div>
        </>
    )
}

export default MessagesPage