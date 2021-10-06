import React from "react";
import Header from "../../components/common/header/Header";
import iconSave from '../../image/icons/icon-disc.png';
import iconUser from '../../image/usersPhoto/icon-user2.png'
import photoUser from '../../image/usersPhoto/photo-user2.png'
import styles from './SettingsPage.module.css'
import iconEdit from '../../image/icons/icon-pencil.png'

const SettingsPage = () => {

    const [name, setName] = React.useState('')
    const [surname, setSurname] = React.useState('')
    const [email, setEmail] = React.useState('')

    const handleOnChangeName = (e) => {
        setName(e.target.value)
    }

    const handleOnChangeSurname = (e) => {
        setSurname(e.target.value)
    }

    const handleOnChangeEmail = (e) => {
        setEmail(e.target.value)
    }

    console.log(email, surname, name)

    return (
        <>
            <div className={styles.settingsPage}>
                <div className={styles.headerContainer}>
                    <Header
                        iconUser={iconUser}
                        iconVariable={iconSave}
                        title='Сохранить'
                    />
                </div>
                <section className={styles.mainContainer}>
                    <div className={styles.photoContainer}>
                        <img className={styles.userPhoto} src={photoUser} alt="user-photo"/>
                        <a className={styles.changePhotoTitle}>Изменить фото</a>
                    </div>
                    <div className={styles.formContainer}>
                        <div className={styles.inputContainer}>
                            <input
                                className={styles.input}
                                type="text"
                                placeholder="Имя"
                                value={name}
                                onChange={handleOnChangeName}
                            />
                            <img
                                src={iconEdit}
                                alt="icon-edit"
                                className={styles.imageEdit}
                            />
                        </div>
                        <div className={styles.inputContainer}>
                            <input
                                className={styles.input}
                                type="text"
                                placeholder="Фамилия"
                                value={surname}
                                onChange={handleOnChangeSurname}
                            />
                            <img
                                src={iconEdit}
                                alt="icon-edit"
                                className={styles.imageEdit}
                            />
                        </div>
                        <div className={styles.inputContainer}>
                            <input
                                className={styles.input}
                                type="text"
                                placeholder="E-mail"
                                value={email}
                                onChange={handleOnChangeEmail}
                            />
                            <img
                                src={iconEdit}
                                alt="icon-edit"
                                className={styles.imageEdit}
                            />
                        </div>
                        <button className={styles.button}>Сохранить изменения</button>
                    </div>
                </section>
            </div>
        </>
    )
}

export default SettingsPage