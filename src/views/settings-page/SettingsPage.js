import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router-dom";

import Header from "../../components/common/header/Header";
import {changeUserInfo} from "../../slices/userSlice";
import iconSave from '../../image/icons/icon-disc.png';
import iconBack from '../../image/icons/icon-back.png'

import styles from './SettingsPage.module.css'
import InputSettings from "../../components/settingspage/inputSettings/InputSettings";
import ButtonSettings from "../../components/settingspage/buttonSettings/ButtonSettings";

const SettingsPage = () => {

    const dispatch = useDispatch();
    const history = useHistory();

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

    const handleCancelChanges = (e) => {
        e.preventDefault();
        setName(users[currentUserId].name)
        setSurname(users[currentUserId].surname)
        setEmail(users[currentUserId].email)
        setEdit(!edit)
    }

    const handleReturnToChat = (e) => {
        e.preventDefault();
        history.push('chats')
    }

    return (
        <>
            <div className={styles.settingsPage}>
                <div className={styles.headerContainer}>
                    {edit ?
                        <Header
                            iconVariable={iconSave}
                            title='Сохранить'
                            onClick={handleSaveChangeButton}
                        /> :
                        <Header
                            iconVariable={iconBack}
                            title='Вернуться на страницу чатов'
                            onClick={handleReturnToChat}
                        />
                    }
                </div>
                <section className={styles.mainContainer}>
                    <div className={styles.photoContainer}>
                        <img className={styles.userPhoto} src={users[currentUserId].avatar} alt="user-avatar"/>
                        <span className={styles.changePhotoTitle}>Изменить фото</span>
                    </div>
                    <form className={styles.formContainer}>
                        <InputSettings
                            value={name}
                            placeholder={users[currentUserId].name}
                            onChange={handleOnChangeName}
                            edit={edit}
                            type='text'
                        />
                        <InputSettings
                            value={surname}
                            placeholder={users[currentUserId].surname}
                            onChange={handleOnChangeSurname}
                            edit={edit}
                            type='text'
                        />
                        <InputSettings
                            value={email}
                            placeholder={users[currentUserId].email}
                            onChange={handleOnChangeEmail}
                            edit={edit}
                            type='email'
                        />
                        {
                            (edit) ?
                                <div className={styles.buttonContainer}>
                                    <ButtonSettings
                                        onClick={handleSaveChangeButton}
                                        textButton='Сохранить изменения'
                                    />
                                    <button
                                        className={styles.buttonCross}
                                        onClick={handleCancelChanges}
                                    />
                                </div>
                                :
                                <ButtonSettings
                                    onClick={handleClickButton}
                                    textButton='Редактировать'
                                />

                        }
                    </form>
                </section>
            </div>
        </>
    )
}

export default SettingsPage