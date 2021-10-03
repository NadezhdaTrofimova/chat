import React from "react";

import iconOpenEye from "../../image/inputIcons/showPassword.png";
import iconLetter from "../../image/inputIcons/iconForEmail.png";
import iconLock from "../../image/inputIcons/iconForPassword.png";
import closeEye from "../../image/inputIcons/closeEye.png";
import iconBigAvatar from '../../image/inputIcons/siluet.png'

import style from '../../components/headerForm/HeaderForm.module.css'

import BottomForm from "../../components/bottomForm/BottomForm";
import ModalWindow from "../../components/modalWindow/ModalWindow";
import Form from "../../components/form/Form";
import HeaderForm from "../../components/headerForm/HeaderForm";

const LoginPage = () => {

    const [optionsLogInput] = React.useState([
        {
            id: 6,
            placeholder: 'Email',
            type: 'email',
            icon: iconLetter,
            isNotVisibility: false,
            showPassword: iconOpenEye,
            isNotVisibleShowPassword: true,
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
        }
    ])


    return (
        <div>
            <ModalWindow
                contentModal={
                    <>
                        <HeaderForm content={
                            <div className={style.iconForm}>
                                <img className={style.iconFormBigAvatar} src={iconBigAvatar} alt='big-avatar'/>
                            </div>
                        }
                        />
                        <Form optionsInput={optionsLogInput} titleButton='Войти' bottomForm={<BottomForm/>}/>
                    </>
                }/>
        </div>
    )
}

export default LoginPage