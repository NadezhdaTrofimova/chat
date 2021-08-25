import styles from './Input.module.css'


const Input = ({optionsInput}) => {

    // const parametrs = [
    //     {placeholder: 'Имя', icon: './../../image/inputIcons/iconForNameForname.png', visibility: 'visible', hidden: false},
    //     {placeholder: 'Фамилия', icon: './../../image/inputIcons/iconForNameForname.png', visibility: 'visible', hidden: false},
    //     {placeholder: 'Email',  icon: './../../image/inputIcons/iconForEmail.png', visibility: 'visible', hidden: false},
    //     {placeholder: 'Пароль',  icon: './../../image/inputIcons/iconForPassword.png', visibility: 'visible', hidden: false},
    //     {placeholder: 'Повторите пароль', icon: './../../image/inputIcons/iconForPassword.png', visibility: 'visible', hidden: false},
    // ]


    return (
        <>
            {optionsInput.map(param =>
            <div className={styles.mainInputContainer} visibility={param.visibility} hidden={param.hidden}>
                <div className={styles.iconBackground}>
                    <img className={styles.icon} src={param.icon}/>
                </div>
                <div className={styles.inputContainer}>

                    <input className={styles.input} placeholder={param.placeholder}/>
                </div>
            </div>
            )}
        </>
    )
}

export default Input