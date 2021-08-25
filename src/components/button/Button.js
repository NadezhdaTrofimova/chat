import styles from './Button.module.css'


const Button = ({titleButton}) => {

    return (
        <div className={styles.containerButton}>
            <button className={styles.button}>{titleButton.title}</button>
        </div>
    )
}

export default Button