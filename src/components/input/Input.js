import styles from './Input.module.css'


const Input = ({optionsInput}) => {

    return (
        <>
            {optionsInput.map(param =>
            <div className={styles.mainInputContainer} visibility={param.visibility} hidden={param.hidden}>
                <div className={styles.iconBackground}>
                    <img className={styles.icon} src={param.icon}/>
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