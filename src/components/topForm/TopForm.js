import styles from './TopForm.module.css'


const TopForm = () => {

    const contentRegForm = {content: 'Регистрация'}

    return (
        <>
            <div className={styles.topForm}>{contentRegForm.content}</div>
        </>
    )
}

export default TopForm