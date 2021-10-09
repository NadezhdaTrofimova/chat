import React from "react";
import {useSelector} from "react-redux";

import styles from './SearchChatPage.module.css'

import iconSettings from '../../image/icons/icon-gear.png'
import iconUser from '../../image/usersPhoto/icon-user0.png'

import Header from "../../components/common/header/Header";
import SearchInput from "../../components/chatSearchPage/searchInput/SearchInput";
import LastMessage from "../../components/chatSearchPage/lastMessage/LastMessage";




const SearchChatPage = ({message}) => {

    // const users = useSelector((state) => state.usersData.users)
    // const currentUser = useSelector((state) => state.usersData.currentUser.id)
    // const iconUser = users[currentUser]
    //
    // console.log(iconUser)

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
                    {message.map((message, index) =>
                        <LastMessage
                            key={index}
                            userName={message.userName}
                            textMessage={message.textMessage}
                            timeTitle={message.timeTitle}
                            photoUser={message.photoUser}
                        />
                    )}
                </ul>
                <div className={styles.buttonContainer}>
                    <p className={styles.buttonTitle}>Создать чат</p>
                </div>
            </div>
        </div>
    )
}

export default SearchChatPage