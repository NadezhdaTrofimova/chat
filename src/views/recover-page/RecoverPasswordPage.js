import React from "react";

import iconLetter from '../../image/icons/icon-letter.png'
import iconLock from '../../image/icons/ico-lock.png'
import iconOpenEye from '../../image/icons/icon-open-eye.png'
import iconCloseEye from '../../image/icons/icon-close-eye.png'

import HeaderForm from "../../components/common/form/headerForm/HeaderForm";
import Form from "../../components/common/form/Form";
import ModalWindow from "../../components/common/modalWindow/ModalWindow";

const RecoverPasswordPage = () => {

    const [emailRecover, setEmailRecover] = React.useState('')
    const [passwordRecover, setPasswordRecover] = React.useState('')
    const [passwordRepeatRecover, setPasswordRepeatRecover] = React.useState('')

    const handleChangeEmailRecover = (event) => {
        setEmailRecover(event.target.value)
    }

    const handleChangePasswordRecover = (event) => {
        setPasswordRecover(event.target.value)
    }

    const handleChangePasswordRepeatRecover = (event) => {
        setPasswordRepeatRecover(event.target.value)
    }


    const [optionsRecPassInput] = React.useState([
        {
            id: 8,
            placeholder: 'Email',
            type: 'email',
            icon: iconLetter,
            isNotVisibility: false,
            showPassword: iconOpenEye,
            isNotVisibleShowPassword: true,
            value: emailRecover,
            onChange: handleChangeEmailRecover
        },
        {
            id: 9,
            placeholder: 'Пароль',
            type: 'password',
            icon: iconLock,
            isNotVisibility: false,
            showPassword: iconOpenEye,
            notShowPassword: iconCloseEye,
            isNotVisibleShowPassword: false,
            value: passwordRecover,
            onChange: handleChangePasswordRecover
        },
        {
            id: 10,
            placeholder: 'Повторите пароль',
            type: 'password',
            icon: iconLock,
            isNotVisibility: false,
            showPassword: iconOpenEye,
            notShowPassword: iconCloseEye,
            isNotVisibleShowPassword: false,
            value: passwordRepeatRecover,
            onChange: handleChangePasswordRepeatRecover
        }
    ])

    return (
        <div>
            <ModalWindow
                contentModal={
                    <>
                        <HeaderForm content='Восстановление пароля'/>
                        <Form
                            optionsInput={optionsRecPassInput}
                            titleButton='Восстановить пароль'
                        />
                    </>
                }/>
        </div>
    )
}

export default RecoverPasswordPage
