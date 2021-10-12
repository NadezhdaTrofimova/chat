import React from "react";
import styles from './MessagesPage.module.css'
import iconSettings from '../../image/icons/icon-gear.png'
import iconUser from '../../image/usersPhoto/icon-user0.png'
import Header from "../../components/common/header/Header";
import MessageField from "../../components/messagesPage/messageField/MessageField";
import MessageItem from "../../components/messagesPage/messageItem/MessageItem";
import {useDispatch, useSelector} from "react-redux";
import {addMessage} from "../../slices/chatSlice";

const MessagesPage = () => {

    const chats = useSelector((state) => state.chats.chatsTitle)
    const messages = useSelector((state) => state.chats.messages)
    const users = useSelector((state) => state.usersData.users)
    const currentUser = useSelector((state) => state.usersData.currentUser.id)
    const currentChat = useSelector((state) => state.chats.currentChat)


    const getMessagesOfTheCurrentChat = (id) => {
        return messages.filter(elem => elem.chat === id).reverse();
    }

    const [textAreaValue, setTextAreaValue] = React.useState('')

    const handleOnChangeTextArea = (e) => {
        setTextAreaValue(e.target.value)
    }

    const dispatch = useDispatch();

    const handleSendMessages = () => {
        dispatch(addMessage({currentChat, currentUser, textAreaValue}))
        setTextAreaValue('')
    }


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
                        {getMessagesOfTheCurrentChat(currentChat).map((message) =>
                            <MessageItem
                                isMyAccount={currentUser === message.author}
                                userName={message.author}
                                textMessage={message.text}
                                timeTitle={message.time}
                                photoUser={users[message.author].avatar}
                            />
                        )}
                    </ul>
                    <MessageField
                        handleOnChangeTextArea={handleOnChangeTextArea}
                        textAreaValue={textAreaValue}
                        handleSendMessages={handleSendMessages}
                    />
                </div>
            </div>
        </>
    )
}

export default MessagesPage