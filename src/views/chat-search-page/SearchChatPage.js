import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router-dom";

import styles from './SearchChatPage.module.css'

import iconSettings from '../../image/icons/icon-gear.png'
import iconUser from '../../image/usersPhoto/icon-user0.png'

import Header from "../../components/common/header/Header";
import SearchInput from "../../components/chatSearchPage/searchInput/SearchInput";
import LastMessage from "../../components/chatSearchPage/lastMessage/LastMessage";


const SearchChatPage = () => {

    const history = useHistory();


    const chats = useSelector((state) => state.chats.chatsTitle)
    const messages = useSelector((state) => state.chats.messages)
    const users = useSelector((state) => state.usersData.users)


    const getLastElem = (id) => {
        return messages.filter(elem => elem.chat === id).pop()
    }

    const handleCreateChat = () => {
        history.push('messages')
    }


    return (
        <div className={styles.searchChatPage}>
            <Header
                iconUser={iconUser}
                iconVariable={iconSettings}
                title='Настройки'
            />
            <div className={styles.inputContainer}>
                <SearchInput/>
            </div>
            <div className={styles.messageMainContainer}>
                <ul className={styles.messageContainer}>
                    {chats.map((chat) =>
                        <LastMessage
                            id={chat.id}
                            key={chat.id}
                            chatsTitle={chat.title}
                            textMessage={getLastElem(chat.id).text}
                            timeTitle={getLastElem(chat.id).time}
                            photoUser={users[getLastElem(chat.id).author].avatar}
                        />
                    )}
                </ul>
                <div className={styles.buttonContainer}>
                    <p
                        onClick={handleCreateChat}
                        className={styles.buttonTitle}>Создать чат</p>
                </div>
            </div>
        </div>
    )
}

export default SearchChatPage