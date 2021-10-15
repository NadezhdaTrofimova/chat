import React from 'react'
import {useDispatch} from "react-redux";
import {useHistory} from "react-router-dom";

import {directToCurrentChat} from "../../../slices/chatSlice";

import styles from './LastMessage.module.css'


const LastMessage = ({chatsTitle, textMessage, timeTitle, photoUser, id}) => {

    const dispatch = useDispatch();
    const history = useHistory();


    const handleRedirectToChat = (e) => {
        dispatch(directToCurrentChat(parseInt(e.currentTarget.id)))
        history.push('messages')
    }

    return (
        <>
            <li onClick={handleRedirectToChat} id={id}>
                <div className={styles.itemContainer}>
                    <div className={styles.avatarContainer}>
                        <img
                            className={styles.userAvatar}
                            alt="avatar-user"
                            src={photoUser}
                        />
                    </div>
                    <p className={styles.name}>{chatsTitle}</p>
                    <span className={styles.timeTitle}>{timeTitle}</span>
                    <div className={styles.containerMessage}>
                        <p className={styles.messageText}>{textMessage}</p>
                    </div>
                </div>
            </li>
        </>
    );
};

export default LastMessage;