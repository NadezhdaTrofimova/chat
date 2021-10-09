import React from "react";
import styles from './MessagesPage.module.css'
import iconSettings from '../../image/icons/icon-gear.png'
import iconUser from '../../image/usersPhoto/icon-user0.png'
import Header from "../../components/common/header/Header";
import MessageField from "../../components/messagesPage/messageField/MessageField";
import MessageItem from "../../components/messagesPage/messageItem/MessageItem";

const MessagesPage = ({message}) => {

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
                        {message.map((message) =>
                            <MessageItem
                                userName={message.userName}
                                textMessage={message.textMessage}
                                timeTitle={message.timeTitle}
                                photoUser={message.photoUser}
                            />
                        )}
                    </ul>

                        <MessageField/>
                </div>
            </div>
        </>
    )
}

export default MessagesPage