import React from 'react';
import {Link} from "react-router-dom"
import styles from './Header.module.css'
import iconUser from '../../image/headerIcons/iconUser.png'
import iconSettings from '../../image/headerIcons/settings-icon.png'
import iconExit from '../../image/headerIcons/exit-icon.png'

const Header = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.headerContainer}>
                <div className={styles.userContainer}>
                    <img className={styles.userImage} src={iconUser} alt="user-icon"/>
                    <p className={styles.userTitle}>Username</p>
                </div>
                <Link className={styles.settingsContainer}>
                    <img className={styles.settingsImage} src={iconSettings} alt="settings-icon"/>
                    <p className={styles.settingsText}>Настройки</p>
                </Link>
            </div>
            <Link className={styles.exitContainer} to='/enter'>
                <p className={styles.exitTitle}>Выйти</p>
                <img className={styles.exitImage} src={iconExit} alt="exit-icon"/>
            </Link>

        </div>
    );
};

export default Header;