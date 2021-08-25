import styles from './Input.module.css'


const Input = () => {
    return (
        <>
            <div className={styles.mainInputContainer}>
                <div className={styles.iconBackground}>
                    <img className={styles.icon} src='./../../image/inputIcons/iconForNameForname.png'/>
                </div>
                <div className={styles.inputContainer}>
                    <input className={styles.input} placeholder='Имя'/>
                </div>
            </div>
        </>
    )
}

export default Input