import React from "react";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
import Form from "../../components/form/Form";
import TopForm from "../../components/topForm/TopForm";


const RegistrationPage = () => {

    const optionsRegInput = [
        {
            id: 1,
            placeholder: 'Имя',
            type: 'text',
            icon: './../../image/inputIcons/iconForNameForname.png',
            visibility: 'visible',
            hidden: false
        },
        {
            id: 2,
            placeholder: 'Фамилия',
            type: 'text',
            icon: './../../image/inputIcons/iconForNameForname.png',
            visibility: 'visible',
            hidden: false
        },
        {
            id: 3,
            placeholder: 'Email',
            type: 'email',
            icon: './../../image/inputIcons/iconForEmail.png',
            visibility: 'visible',
            hidden: false
        },
        {
            id: 4,
            placeholder: 'Пароль',
            type: 'password',
            icon: './../../image/inputIcons/iconForPassword.png',
            visibility: 'visible',
            hidden: false
        },
        {
            id: 5,
            placeholder: 'Повторите пароль',
            type: 'password',
            icon: './../../image/inputIcons/iconForPassword.png',
            visibility: 'visible',
            hidden: false
        },
    ]


    return (
        <div>
            <TopForm/>
            <Form optionsInput={optionsRegInput}/>
        </div>
    )
}

export default RegistrationPage
