import React from "react";
import styles from './SearchChatPage.module.css'
import Header from "../../components/header/Header";
import iconSettings from '../../image/headerIcons/icon-settings.png'
import iconUser from '../../image/usersPhoto/icon-user1.png'
import SearchInput from "../../components/searchInput/SearchInput";

const SearchChatPage = () => {

    return (
        <>
            <Header
                iconUser={iconUser}
                iconVariable={iconSettings}
                title='Настройки'
            />
            <div className={styles.inputContainer}>
                <SearchInput/>
            </div>
        </>
    )
}

export default SearchChatPage