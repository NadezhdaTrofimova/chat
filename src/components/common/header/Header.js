import React from 'react';
import {useDispatch} from "react-redux";
import {Link} from "react-router-dom"
import {useHistory} from "react-router-dom";
import styles from './Header.module.css'
import iconExit from '../../../image/icons/icon-open-door.png'

import {logOutUser} from "../../../slices/userSlice";

const Header = ({iconUser, iconVariable, title}) => {

    const history = useHistory();
    const dispatch = useDispatch();

    const handleLogOut = (e) => {
        e.preventDefault();
        dispatch(logOutUser())
        history.push('login')
    }

    return (
        <div className={styles.headerWrapper}>
            <div className={styles.headerContainer}>
                <div className={styles.userInfoContainer}>
                    <img className={styles.userAvatar} src={iconUser} alt="user-icon"/>
                    <p className={styles.userName}>Username</p>
                </div>
                <Link to='/settings' className={styles.settingsContainer}>
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