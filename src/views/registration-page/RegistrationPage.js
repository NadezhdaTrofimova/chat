import React from "react";
import {useSelector, useDispatch} from "react-redux";

import iconAvatar from '../../image/icons/icon-man.png'
import iconLetter from '../../image/icons/icon-letter.png'
import iconLock from '../../image/icons/ico-lock.png'
import iconOpenEye from '../../image/icons/icon-open-eye.png'
import iconCloseEye from '../../image/icons/icon-close-eye.png'

import ModalWindow from "../../components/common/modalWindow/ModalWindow";
import HeaderForm from "../../components/common/form/headerForm/HeaderForm";
import Form from "../../components/common/form/Form";

import {addUser} from "../../slices/userSlice"

const RegistrationPage = () => {

    const [nameUser, setNameUser] = React.useState('')
    const [surnameUser, setSurnameUser] = React.useState('')
    const [emailUser, setEmailUser] = React.useState('')
    const [passwordUser, setPasswordUser] = React.useState('')
    const [repeatPasswordUser, setRepeatPasswordUser] = React.useState('')
    // const [emailDirty, setEmailDirty] = React.useState(false)
    // // const [passwordDirty, setPasswordDirty] = React.useState(false)
    // const [emailError, setEmailError] = React.useState('E-mail не может быть пустым')


    const handleChangeNameUser = (event) => {
        setNameUser(event.target.value)
        // const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        // if (re.test(String(event.target.value).toLowerCase())) {
        //     setEmailError('uncorrect email')
        // } else {
        //     setEmailError('')
        // }
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

    // const blurHandler = (e) => {
    //     switch (e.target.id) {
    //         case 1:
    //             setEmailDirty(true)
    //             break
    //         case 2:
    //             setEmailDirty(true)
    //             break
    //     }
    // }


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
            // dirty: emailDirty,
            // onBlur: blurHandler
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
            // dirty: passwordDirty
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

    const userData = useSelector((state) => state.user.value)

    console.log(userData)

    const dispatch = useDispatch()
    const handleAddUser = (event) => {
        event.preventDefault()
        // dispatch(addUser)
        // console.log(userData)
    }


    return (
        <div>
            <ModalWindow
                contentModal={
                    <>
                        <HeaderForm content='Регистрация'/>
                        {/*{(emailDirty && emailError) && <div style={{color: 'red'}}>{emailError}</div>}*/}
                        <Form
                            optionsInput={optionsRegInput}
                            titleButton='Зарегистрироваться'
                            onSubmit={handleAddUser}
                        />
                    </>
                }/>
        </div>
    )
}

export default RegistrationPage
