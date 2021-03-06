import React from "react";

import styles from './Input.module.css';

const Input = ({optionsInput}) => {

    const [isShowPassword, setIsShowPassword] = React.useState(false);

    const handleShowPassword = () => {
        setIsShowPassword(!isShowPassword)
    }

    return (
        <>
            {optionsInput.map((parameters) =>
                <div className={`${styles.mainInputContainer} ${parameters.isNotVisibility && styles.isNotVisibility}`}
                     key={parameters.id}>
                    <div className={styles.iconBackground}>
                        <img
                            className={styles.icon}
                            src={parameters.icon}
                            alt='icon'
                        />
                    </div>
                    <div className={styles.inputContainer}>
                        <input
                            className={styles.input}
                            placeholder={parameters.placeholder}
                            type={isShowPassword ? 'text' : parameters.type}
                            value={parameters.state}
                            onChange={parameters.onChange}
                            required
                        />
                        <img
                            className={`${styles.iconShowPassword} ${parameters.isNotVisibleShowPassword && styles.isNotVisibleShowPassword}`}
                            src={isShowPassword ? parameters.notShowPassword : parameters.showPassword}
                            alt='eye'
                            onClick={handleShowPassword}
                        />
                    </div>
                </div>
            )}
        </>
    )
}


export default Input