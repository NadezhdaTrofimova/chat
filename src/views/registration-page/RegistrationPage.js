import React from "react";
import {useSelector, useDispatch} from "react-redux";
import {useHistory} from "react-router-dom";

import iconAvatar from '../../image/icons/icon-man.png'
import iconLetter from '../../image/icons/icon-letter.png'
import iconLock from '../../image/icons/ico-lock.png'
import iconOpenEye from '../../image/icons/icon-open-eye.png'
import iconCloseEye from '../../image/icons/icon-close-eye.png'
import notIconUser from '../../image/pictures/picture-not-avatar.png'

import ModalWindow from "../../components/common/modalWindow/ModalWindow";
import HeaderForm from "../../components/common/form/headerForm/HeaderForm";
import Form from "../../components/common/form/Form";

import {addUser} from "../../slices/userSlice"


const RegistrationPage = () => {

    const dispatch = useDispatch();
    const history = useHistory();

    const users = useSelector((state) => state.usersData.users)

    const [nameUser, setNameUser] = React.useState('')
    const [surnameUser, setSurnameUser] = React.useState('')
    const [emailUser, setEmailUser] = React.useState('')
    const [passwordUser, setPasswordUser] = React.useState('')
    const [repeatPasswordUser, setRepeatPasswordUser] = React.useState('')


    const handleChangeNameUser = (event) => {
        setNameUser(event.target.value)
    }

    const handleChangSurnameUser = (event) => {
        setSurnameUser(event.target.value)
    }

    const handleChangeEmailUser = (event) => {
        setEmailUser(event.target.value)
    }

    const handleChangePasswordUser = (event) => {
        setPasswordUser(event.target.value)
    }
    const handleChangeRepeatPasswordUser = (event) => {
        setRepeatPasswordUser(event.target.value)
    }


    const checkRepeatedUser = (email) => {
        let flag = false;
        for (let i = 0; i < users.length; i++) {
            if (email === users[i].email)
                flag = true
        }
        return flag
    }


    const handleAddUser = (event) => {
        event.preventDefault();
        if (checkRepeatedUser(emailUser))
            alert('Пользователь с данным e-mail уже зарегистрирован!')
        else if (passwordUser.length < 3)
            alert("Пароль слишком короткий!")
        else if (passwordUser !== repeatPasswordUser)
            alert("Введенные пароли не совпадают!")
        else {
            dispatch(addUser({nameUser, surnameUser, emailUser, passwordUser, notIconUser}))
            history.push('chats')
        }
    }


    const [optionsRegInput] = React.useState([
        {
            id: 1,
            placeholder: 'Имя',
            type: 'text',
            icon: iconAvatar,
            isNotVisibility: false,
            showPassword: iconOpenEye,
            isNotVisibleShowPassword: true,
            value: nameUser,
            onChange: handleChangeNameUser,
        },
        {
            id: 2,
            placeholder: 'Фамилия',
            type: 'text',
            icon: iconAvatar,
            isNotVisibility: false,
            showPassword: iconOpenEye,
            isNotVisibleShowPassword: true,
            value: surnameUser,
            onChange: handleChangSurnameUser,
        },
        {
            id: 3,
            placeholder: 'Email',
            type: 'email',
            icon: iconLetter,
            isNotVisibility: false,
            showPassword: iconOpenEye,
            isNotVisibleShowPassword: true,
            value: emailUser,
            onChange: handleChangeEmailUser
        },
        {
            id: 4,
            placeholder: 'Пароль',
            type: 'password',
            icon: iconLock,
            isNotVisibility: false,
            showPassword: iconOpenEye,
            notShowPassword: iconCloseEye,
            isNotVisibleShowPassword: false,
            value: passwordUser,
            onChange: handleChangePasswordUser
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
            value: repeatPasswordUser,
            onChange: handleChangeRepeatPasswordUser
        }
    ])


    return (
        <div>
            <ModalWindow
                contentModal={
                    <>
                        <HeaderForm content='Регистрация'/>
                        <Form
                            optionsInput={optionsRegInput}
                            titleButton='Зарегистрироваться'
                            onSubmit={handleAddUser}
                        />
                    </>
                }
            />
        </div>
    )
}

export default RegistrationPage
