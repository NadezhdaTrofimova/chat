import React from "react";
import ModalWindow from "../../components/modalWindow/ModalWindow";
import image1 from '../../image/inputIcons/iconForNameForname.png'
import image2 from '../../image/inputIcons/iconForEmail.png'
import image3 from '../../image/inputIcons/iconForPassword.png'
import showPassword from '../../image/inputIcons/showPassword.png'
import closeEye from '../../image/inputIcons/closeEye.png'
import TopForm from "../../components/topForm/TopForm";
import Form from "../../components/form/Form";


const RecoverPassword = () => {

    const [optionsRecPassInput] = React.useState([
        {
            id: 8,
            placeholder: 'Email',
            type: 'email',
            icon: image2,
            isNotVisibility: false,
            showPassword: showPassword,
            isNotVisibleShowPassword: true,
        },
        {
            id: 9,
            placeholder: 'Пароль',
            type: 'password',
            icon: image3,
            isNotVisibility: false,
            showPassword: showPassword,
            notShowPassword: closeEye,
            isNotVisibleShowPassword: false,
        },
        {
            id: 10,
            placeholder: 'Повторите пароль',
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
            <ModalWindow
                contentModal={
                    <>
                        <TopForm content='Восстановление пароля'/>
                        <Form optionsInput={optionsRecPassInput} titleButton='Восстановить пароль'/>
                    </>
                }/>
        </div>
    )
}

export default RecoverPassword
