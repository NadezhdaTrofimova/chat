import React from "react";
import styles from './Input.module.css'

const Input = ({optionsInput, setOptionsInput}) => {

    // const handleShowPassword = () => {
    //     if (optionsInput.type === 'password') {
    //         setOptionsInput({type: 'text', flagIcon: true})
    //     } else {
    //         setOptionsInput({type: 'password', flagIcon: false})
    //     }
    // }

    return (
        <>
            {optionsInput.map((param) =>
                <div className={`${styles.mainInputContainer} ${param.isNotVisibility && styles.isNotVisibility}`}
                     key={param.id}>
                    <div className={styles.iconBackground}>
                        <img className={styles.icon} src={param.icon} alt='icon'/>
                    </div>
                    <div className={styles.inputContainer}>
                        <input className={styles.input} placeholder={param.placeholder} type={param.type}/>
                        <img
                            className={`${styles.iconShowPassword} ${param.isNotVisibleShowPassword && styles.isNotVisibleShowPassword} ${param.flagIcon && styles.iconShowPasswordClicked}`}
                            src={param.showPassword} alt='eye'/>
                            {/*onClick={handleShowPassword}/>*/}
                    </div>
                </div>
            )}
        </>
    )
}

export default Input