import React from "react";
import {useDispatch, useSelector} from "react-redux";

import Header from "../../components/common/header/Header";

import iconSave from '../../image/icons/icon-disc.png';
import styles from './SettingsPage.module.css'
import iconEdit from '../../image/icons/icon-gear.png'
import iconEditInput from '../../image/icons/icon-pencil.png'

import {changeUserInfo} from "../../slices/userSlice";


const SettingsPage = () => {

    const dispatch = useDispatch();

    const users = useSelector((state) => state.usersData.users)
    const currentUserId = useSelector((state) => state.usersData.currentUser.id)

    const [name, setName] = React.useState('')
    const [surname, setSurname] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [edit, setEdit] = React.useState(false)

    const handleOnChangeName = (e) => {
        setName(e.target.value)
    }

    const handleOnChangeSurname = (e) => {
        setSurname(e.target.value)
    }

    const handleOnChangeEmail = (e) => {
        setEmail(e.target.value)
    }

    const handleClickButton = (e) => {
        e.preventDefault();
        setEdit(!edit)
        setName(users[currentUserId].name)
        setSurname(users[currentUserId].surname)
        setEmail(users[currentUserId].email)
    }

    const handleSaveChangeButton = (e) => {
        e.preventDefault();
        if (name === '' || surname === '' || email === '')
            alert('Поля не могут быть пустыми!')
        else if (!email.includes('@'))
            alert("E-mail должен сожержать @!")
        else {
            dispatch(changeUserInfo({currentUserId, name, surname, email}))
            setEdit(!edit)
        }
    }

    return (
        <>
            <div className={styles.settingsPage}>
                <div className={styles.headerContainer}>
                    <Header
                        iconVariable={`${edit ? iconSave : iconEdit}`}
                        title={`${edit ? 'Сохранить' : 'Редактировать'}`}
                        onClick={handleSaveChangeButton}
                    />
                </div>
                <section className={styles.mainContainer}>
                    <div className={styles.photoContainer}>
                        <img className={styles.userPhoto} src={users[currentUserId].avatar} alt="user-photo"/>
                        <a className={styles.changePhotoTitle}>Изменить фото</a>
                    </div>
                    <form className={styles.formContainer}>
                        <div className={styles.inputContainer}>
                            <input
                                className={styles.input}
                                type="text"
                                placeholder={users[currentUserId].name}
                                value={name}
                                onChange={handleOnChangeName}
                                disabled={!edit}
                                required
                            />
                            <img
                                src={iconEditInput}
                                alt="icon-edit"
                                className={`${edit ? styles.imageEdit : styles.unVisibleImageEdit}`}
                            />
                        </div>
                        <div className={styles.inputContainer}>
                            <input
                                className={styles.input}
                                type="text"
                                placeholder={users[currentUserId].surname}
                                value={surname}
                                onChange={handleOnChangeSurname}
                                disabled={!edit}
                                required
                            />
                            <img
                                src={iconEditInput}
                                alt="icon-edit"
                                className={`${edit ? styles.imageEdit : styles.unVisibleImageEdit}`}
                            />
                        </div>
                        <div className={styles.inputContainer}>
                            <input
                                className={styles.input}
                                type="email"
                                placeholder={users[currentUserId].email}
                                value={email}
                                onChange={handleOnChangeEmail}
                                disabled={!edit}
                                required
                            />
                            <img
                                src={iconEditInput}
                                alt="icon-edit"
                                className={`${edit ? styles.imageEdit : styles.unVisibleImageEdit}`}
                            />
                        </div>

                        {
                            (edit) ?
                                <button
                                    className={styles.button}
                                    onClick={handleSaveChangeButton}>
                                    Сохранить изменения
                                </button>
                                :
                                <button
                                    className={styles.button}
                                    onClick={handleClickButton}>
                                    Редактировать
                                </button>
                        }

                    </form>
                </section>
            </div>
        </>
    )
}

export default SettingsPage