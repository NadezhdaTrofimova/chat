import React from "react";

import iconLetter from '../../image/inputIcons/iconForEmail.png'
import iconLock from '../../image/inputIcons/iconForPassword.png'
import iconOpenEye from '../../image/inputIcons/showPassword.png'
import iconCloseEye from '../../image/inputIcons/closeEye.png'

import HeaderForm from "../../components/headerForm/HeaderForm";
import Form from "../../components/form/Form";
import ModalWindow from "../../components/modalWindow/ModalWindow";

const RecoverPasswordPage = () => {

    const [optionsRecPassInput] = React.useState([
        {
            id: 8,
            placeholder: 'Email',
            type: 'email',
            icon: iconLetter,
            isNotVisibility: false,
            showPassword: iconOpenEye,
            isNotVisibleShowPassword: true,
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
        }
    ])

    return (
        <div>
            <ModalWindow
                contentModal={
                    <>
                        <HeaderForm content='Восстановление пароля'/>
                        <Form optionsInput={optionsRecPassInput} titleButton='Восстановить пароль'/>
                    </>
                }/>
        </div>
    )
}

export default RecoverPasswordPage
