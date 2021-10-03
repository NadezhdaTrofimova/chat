import React from "react";

import iconAvatar from '../../image/icons/icon-man.png'
import iconLetter from '../../image/icons/icon-letter.png'
import iconLock from '../../image/icons/ico-lock.png'
import iconOpenEye from '../../image/icons/icon-open-eye.png'
import iconCloseEye from '../../image/icons/icon-close-eye.png'

import ModalWindow from "../../components/modalWindow/ModalWindow";
import HeaderForm from "../../components/headerForm/HeaderForm";
import Form from "../../components/form/Form";

const RegistrationPage = () => {

    const [optionsRegInput] = React.useState([
        {
            id: 1,
            placeholder: 'Имя',
            type: 'text',
            icon: iconAvatar,
            isNotVisibility: false,
            showPassword: iconOpenEye,
            isNotVisibleShowPassword: true,
        },
        {
            id: 2,
            placeholder: 'Фамилия',
            type: 'text',
            icon: iconAvatar,
            isNotVisibility: false,
            showPassword: iconOpenEye,
            isNotVisibleShowPassword: true,
        },
        {
            id: 3,
            placeholder: 'Email',
            type: 'email',
            icon: iconLetter,
            isNotVisibility: false,
            showPassword: iconOpenEye,
            isNotVisibleShowPassword: true,
        },
        {
            id: 4,
            placeholder: 'Пароль',
            type: 'password',
            icon: iconLock,
            isNotVisibility: false,
            showPassword: iconOpenEye,
            notShowPassword:iconCloseEye,
            isNotVisibleShowPassword: false,
        },
        {
            id: 5,
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
                        <HeaderForm content='Регистрация'/>
                        <Form optionsInput={optionsRegInput} titleButton='Зарегистрироваться'/>
                    </>
                }/>
        </div>
    )
}

export default RegistrationPage
