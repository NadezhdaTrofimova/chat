import React from "react";
import styles from './SearchChatPage.module.css'
import Header from "../../components/header/Header";
import iconSettings from '../../image/icons/icon-gear.png'
import iconUser from '../../image/usersPhoto/icon-user1.png'
import SearchInput from "../../components/searchInput/SearchInput";
import MessageItemSearchPage from "../../components/messageItemSearchPage/MessageItemSearchPage";

const SearchChatPage = () => {

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
                    <MessageItemSearchPage/>
                    <MessageItemSearchPage/>
                    <MessageItemSearchPage/>
                    <MessageItemSearchPage/>
                    <MessageItemSearchPage/>
                    <MessageItemSearchPage/>
                </ul>
                <div className={styles.buttonContainer}>
                    <p className={styles.buttonTitle}>Создать чат</p>
                </div>
            </div>
        </div>
    )
}

export default SearchChatPage