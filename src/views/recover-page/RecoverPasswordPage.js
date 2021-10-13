import React from "react";
import {useHistory} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import HeaderForm from "../../components/common/form/headerForm/HeaderForm";
import Form from "../../components/common/form/Form";
import ModalWindow from "../../components/common/modalWindow/ModalWindow";
import {recoverPassword} from "../../slices/userSlice";
import iconLetter from '../../image/icons/icon-letter.png'
import iconLock from '../../image/icons/ico-lock.png'
import iconOpenEye from '../../image/icons/icon-open-eye.png'
import iconCloseEye from '../../image/icons/icon-close-eye.png'

const RecoverPasswordPage = () => {

    const history = useHistory();
    const dispatch = useDispatch();

    const users = useSelector((state) => state.usersData.users)

    const [emailRecover, setEmailRecover] = React.useState('')
    const [passwordRecover, setPasswordRecover] = React.useState('')
    const [passwordRepeatRecover, setPasswordRepeatRecover] = React.useState('')

    const handleChangeEmailRecover = (event) => {
        setEmailRecover(event.target.value)
    }

    const handleChangePasswordRecover = (event) => {
        setPasswordRecover(event.target.value)
    }

    const handleChangePasswordRepeatRecover = (event) => {
        setPasswordRepeatRecover(event.target.value)
    }

    const checkPresenceUser = (email) => {
        let flag = false;
        for (let i = 0; i < users.length; i++) {
            if (email === users[i].email)
                flag = true
        }
        return !flag
    }


    const handleFormRecoverPasswordSubmit = (e) => {
        e.preventDefault();
        if (checkPresenceUser(emailRecover))
            alert("Пользователь с таким паролем не существует!")
        else if (passwordRecover.length < 3)
            alert("Пароль слишком короткий!")
        else if (passwordRecover !== passwordRepeatRecover)
            alert('Введенные пароли не совпадают')
        else {
            dispatch(recoverPassword({emailRecover, passwordRecover}))
            history.push('login')
        }
    }


    const [optionsRecPassInput] = React.useState([
        {
            id: 8,
            placeholder: 'Email',
            type: 'email',
            icon: iconLetter,
            isNotVisibility: false,
            showPassword: iconOpenEye,
            isNotVisibleShowPassword: true,
            value: emailRecover,
            onChange: handleChangeEmailRecover
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
            value: passwordRecover,
            onChange: handleChangePasswordRecover
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
            value: passwordRepeatRecover,
            onChange: handleChangePasswordRepeatRecover
        }
    ])

    return (
        <div>
            <ModalWindow
                contentModal={
                    <>
                        <HeaderForm content='Восстановление пароля'/>
                        <Form
                            optionsInput={optionsRecPassInput}
                            titleButton='Восстановить пароль'
                            onSubmit={handleFormRecoverPasswordSubmit}
                        />
                    </>
                }/>
        </div>
    )
}

export default RecoverPasswordPage
