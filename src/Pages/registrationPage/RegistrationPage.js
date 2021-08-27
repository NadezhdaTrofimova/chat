import React from "react";
import ModalWindow from "../../components/modalWindow/ModalWindow";
import image1 from './../../image/inputIcons/iconForNameForname.png'
import image2 from './../../image/inputIcons/iconForEmail.png'
import image3 from './../../image/inputIcons/iconForPassword.png'


const RegistrationPage = () => {

    const optionsRegInput = [
        {
            id: 1,
            placeholder: 'Имя',
            type: 'text',
            icon: image1,
            isNotVisibility: false
        },
        {
            id: 2,
            placeholder: 'Фамилия',
            type: 'text',
            icon: image1,
            isNotVisibility: false
        },
        {
            id: 3,
            placeholder: 'Email',
            type: 'email',
            icon: image2,
            isNotVisibility: false
        },
        {
            id: 4,
            placeholder: 'Пароль',
            type: 'password',
            icon: image3,
            isNotVisibility: false
        },
        {
            id: 5,
            placeholder: 'Повторите пароль',
            type: 'password',
            icon: image3,
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
