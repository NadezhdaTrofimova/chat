import React from "react";
import {useDispatch} from "react-redux";
import {useHistory} from "react-router-dom";

import Header from "../../components/common/header/Header";
import SearchInput from "../../components/chatSearchPage/searchInput/SearchInput";
import LastMessage from "../../components/chatSearchPage/lastMessage/LastMessage";
import {Chats, Messages, Users} from "../../selectors";
import {addChat} from "../../slices/chatSlice";
import iconSettings from '../../image/icons/icon-gear.png'
import iconUser from '../../image/usersPhoto/photo-user3.png'

import styles from './SearchChatPage.module.css'

const SearchChatPage = () => {

    const history = useHistory();
    const dispatch = useDispatch();

    const [openInput, setOpenInput] = React.useState(false)
    const [inputCreateChatValue, setInputCreateChatValue] = React.useState('')

    const handleOnChangeInputCreateValue = (e) => {
        setInputCreateChatValue(e.target.value)
    }

    const getLastElem = (id) => {
        return Messages().filter(elem => elem.chat === id).pop()
    }

    const handleCreateChat = () => {
        dispatch(addChat({inputCreateChatValue}))
        history.push('messages')
    }

    const handleOpenInput = () => {
        setOpenInput(true)
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
                    {Chats().map((chat) =>
                        <LastMessage
                            id={chat.id}
                            key={chat.id}
                            chatsTitle={chat.title}
                            textMessage={getLastElem(chat.id).text}
                            timeTitle={getLastElem(chat.id).time}
                            photoUser={Users()[getLastElem(chat.id).author].avatar}
                        />
                    )}
                </ul>
                <div className={styles.buttonContainer}>
                    <p
                        onClick={openInput ? handleCreateChat : handleOpenInput}
                        className={styles.buttonTitle}>Создать чат</p>
                </div>
                {openInput &&
                <div className={styles.input}>
                    <input
                        value={inputCreateChatValue}
                        onChange={handleOnChangeInputCreateValue}
                        className={styles.inputTitle}
                        placeholder='Введите название чата'
                    />
                </div>
                }
            </div>
        </div>
    )
}

export default SearchChatPage