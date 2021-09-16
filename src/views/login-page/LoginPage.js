import ModalWindow from "../../components/modalWindow/ModalWindow";
import React from "react";
import showPassword from "../../image/inputIcons/showPassword.png";
import image2 from "../../image/inputIcons/iconForEmail.png";
import image3 from "../../image/inputIcons/iconForPassword.png";
import closeEye from "../../image/inputIcons/closeEye.png";
import siluet from '../../image/inputIcons/siluet.png'


const LoginPage = () => {

    const [optionsLogInput] = React.useState([
        {
            id: 6,
            placeholder: 'Email',
            type: 'email',
            icon: image2,
            isNotVisibility: false,
            showPassword: showPassword,
            isNotVisibleShowPassword: true,
        },
        {
            id: 7,
            placeholder: 'Пароль',
            type: 'password',
            icon: image3,
            isNotVisibility: false,
            showPassword: showPassword,
            notShowPassword: closeEye,
            isNotVisibleShowPassword: false,
        }
    ])


    return (
        <div>
            <ModalWindow optionsInput={optionsLogInput} titleButton='Войти' content='' icon = {siluet}/>
        </div>

    )
}

export default LoginPage