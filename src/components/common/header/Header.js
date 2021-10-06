import React from 'react';
import {Link} from "react-router-dom"
import styles from './Header.module.css'
import iconExit from '../../../image/icons/icon-open-door.png'

const Header = ({iconUser, iconVariable, title}) => {
    return (
        <div className={styles.headerWrapper}>
            <div className={styles.headerContainer}>
                <div className={styles.userInfoContainer}>
                    <img className={styles.userAvatar} src={iconUser} alt="user-icon"/>
                    <p className={styles.userName}>Username</p>
                </div>
                <Link to='/settings'  className={styles.settingsContainer}>
                    <img className={styles.settingsImage} src={iconVariable} alt="settings-icon"/>
                    <p className={styles.settingsText}>{title}</p>
                </Link>
            </div>
            <Link className={styles.exitContainer}>
                <p className={styles.exitTitle}>Выйти</p>
                <img className={styles.exitImage} src={iconExit} alt="exit-icon"/>
            </Link>

        </div>
    );
};

export default Header;