import styles from './Input.module.css'


const Input = ({optionsInput}) => {

    return (
        <>
            {optionsInput.map(param =>
            <div className={`${styles.mainInputContainer} ${param.isNotVisibility && styles.isNotVisibility}`}>
                <div className={styles.iconBackground}>
                    <img className={styles.icon} src={param.icon} alt='icon'/>
                </div>
                <div className={styles.inputContainer}>

                    <input className={styles.input} placeholder={param.placeholder} type={param.type} key={param.id}/>
                </div>
            </div>
            )}
        </>
    )
}

export default Input