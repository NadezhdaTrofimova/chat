import React from "react";

import iconOpenEye from "../../image/icons/icon-open-eye.png";
import iconLetter from "../../image/icons/icon-letter.png";
import iconLock from "../../image/icons/ico-lock.png";
import closeEye from "../../image/icons/icon-close-eye.png";
import iconBigAvatar from '../../image/pictures/picture-not-avatar.png'

import style from '../../components/common/form/headerForm/HeaderForm.module.css'

import BottomForm from "../../components/common/form/bottomForm/BottomForm";
import ModalWindow from "../../components/common/modalWindow/ModalWindow";
import Form from "../../components/common/form/Form";
import HeaderForm from "../../components/common/form/headerForm/HeaderForm";

const LoginPage = () => {

    const [emailLog, setEmailLog] = React.useState('')
    const [passwordLog, setPasswordLog] = React.useState('')

    const handleChangeEmailLog = (event) => {
        setEmailLog(event.target.value)
    }

    const handleChangePasswordLog = (event) => {
        setPasswordLog(event.target.value)
    }


    const [optionsLogInput] = React.useState([
        {
            id: 6,
            placeholder: 'Email',
            type: 'email',
            icon: iconLetter,
            isNotVisibility: false,
            showPassword: iconOpenEye,
            isNotVisibleShowPassword: true,
            value: emailLog,
            onChange: handleChangeEmailLog,
        },
        {
            id: 7,
            placeholder: 'Пароль',
            type: 'password',
            icon: iconLock,
            isNotVisibility: false,
            showPassword: iconOpenEye,
            notShowPassword: closeEye,
            isNotVisibleShowPassword: false,
            value: passwordLog,
            onChange: handleChangePasswordLog,
        }
    ])


    return (
        <div>
            <ModalWindow
                contentModal={
                    <>
                        <HeaderForm content={
                            <div className={style.iconForm}>
                                <img
                                    className={style.iconFormBigAvatar}
                                    src={iconBigAvatar}
                                    alt='big-avatar'
                                />
                            </div>
                        }
                        />
                        <Form
                            optionsInput={optionsLogInput}
                            titleButton='Войти'
                            bottomForm={<BottomForm/>}
                        />
                    </>
                }
            />
        </div>
    )
}

export default LoginPage