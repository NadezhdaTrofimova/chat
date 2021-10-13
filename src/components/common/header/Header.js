import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router-dom";

import {Link} from "react-router-dom"
import {logOutUser} from "../../../slices/userSlice";
import iconExit from '../../../image/icons/icon-open-door.png'

import styles from './Header.module.css'

const Header = ({iconVariable, title, onClick}) => {

    const history = useHistory();
    const dispatch = useDispatch();

    const users = useSelector((state) => state.usersData.users)
    const currentUserId = useSelector((state) => state.usersData.currentUser.id)

    const handleLogOut = (e) => {
        e.preventDefault();
        dispatch(logOutUser())
        history.push('login')
    }

    return (
        <div className={styles.headerWrapper}>
            <div className={styles.headerContainer}>
                <div className={styles.userInfoContainer}>
                    <img className={styles.userAvatar} src={users[currentUserId].avatar} alt="user-icon"/>
                    <p className={styles.userName}>{users[currentUserId].name} {users[currentUserId].surname}</p>
                </div>
                <Link to='/settings' className={styles.settingsContainer} onClick={onClick}>
                    <img className={styles.settingsImage} src={iconVariable} alt="settings-icon"/>
                    <p className={styles.settingsText}>{title}</p>
                </Link>
            </div>
            <div className={styles.exitContainer} onClick={handleLogOut}>
                <p className={styles.exitTitle}>Выйти</p>
                <img className={styles.exitImage} src={iconExit} alt="exit-icon"/>
            </div>
        </div>
    );
};

export default Header;