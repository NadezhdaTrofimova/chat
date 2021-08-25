import React from "react";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";


const RegistrationPage = () => {

    const [optionsInput, setOptionsInput] = React.useState ([
        {placeholder: 'Имя', type: 'text', icon: './../../image/inputIcons/iconForNameForname.png', visibility: 'visible', hidden: false},
        {placeholder: 'Фамилия', type: 'text', icon: './../../image/inputIcons/iconForNameForname.png', visibility: 'visible', hidden: false},
        {placeholder: 'Email',  type: 'email', icon: './../../image/inputIcons/iconForEmail.png', visibility: 'visible', hidden: false},
        {placeholder: 'Пароль', type: 'password',  icon: './../../image/inputIcons/iconForPassword.png', visibility: 'visible', hidden: false},
        {placeholder: 'Повторите пароль', type: 'password',  icon: './../../image/inputIcons/iconForPassword.png', visibility: 'visible', hidden: false},
    ])

    const titleRegButton = {name: 'Зарегистрироваться'}

    return (
        <div>
            <Input optionsInput={optionsInput}/>
            <Button titleButton={titleRegButton}/>
        </div>
    )
}

export default RegistrationPage
