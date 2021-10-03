import React from "react";

import iconOpenEye from "../../image/icons/icon-open-eye.png";
import iconLetter from "../../image/icons/icon-letter.png";
import iconLock from "../../image/icons/ico-lock.png";
import closeEye from "../../image/icons/icon-close-eye.png";
import iconBigAvatar from '../../image/picture/picture-not-avatar.png'

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