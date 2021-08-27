import React from "react";
import ModalWindow from "../../components/modalWindow/ModalWindow";


const RegistrationPage = () => {

    const optionsRegInput = [
        {
            id: 1,
            placeholder: 'Имя',
            type: 'text',
            icon: './../../image/inputIcons/iconForNameForname.png',
            isNotVisibility: false
        },
        {
            id: 2,
            placeholder: 'Фамилия',
            type: 'text',
            icon: './../../image/inputIcons/iconForNameForname.png',
            isNotVisibility: false
        },
        {
            id: 3,
            placeholder: 'Email',
            type: 'email',
            icon: './../../image/inputIcons/iconForEmail.png',
            isNotVisibility: false
        },
        {
            id: 4,
            placeholder: 'Пароль',
            type: 'password',
            icon: './../../image/inputIcons/iconForPassword.png',
            isNotVisibility: false
        },
        {
            id: 5,
            placeholder: 'Повторите пароль',
            type: 'password',
            icon: './../../image/inputIcons/iconForPassword.png',
            isNotVisibility: false
        },
    ]


    return (
        <div>
            <ModalWindow optionsInput={optionsRegInput}  titleButton='Зарегистрироваться' content='Регистрация'/>
        </div>
    )
}

export default RegistrationPage
