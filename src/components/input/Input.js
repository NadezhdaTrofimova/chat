import React from "react";
import styles from './Input.module.css'


const Input = ({optionsInput}) => {

    const [inputType, setInputType] = React.useState('password');
    const [flagColor, setFlagColor] = React.useState(false)

    const handleShowPassword = () => {
        if (inputType === 'password') {
            setInputType('text')
            setFlagColor(true)
        } else {
            setInputType('password')
            setFlagColor(false)
        }
    }

    return (
        <>
            {optionsInput.map(param =>
                <div className={`${styles.mainInputContainer} ${param.isNotVisibility && styles.isNotVisibility}`}
                     key={param.id}>
                    <div className={styles.iconBackground}>
                        <img className={styles.icon} src={param.icon} alt='icon'/>
                    </div>
                    <div className={styles.inputContainer}>
                        <input className={styles.input} placeholder={param.placeholder} type={inputType}/>
                        <img
                            className={`${styles.iconShowPassword} ${param.isNotVisibleShowPassword && styles.isNotVisibleShowPassword} ${flagColor && styles.iconShowPasswordClicked}`}
                            src={param.showPassword} alt='eye'
                            onClick={handleShowPassword}/>
                    </div>
                </div>
            )}
        </>
    )
}

export default Input