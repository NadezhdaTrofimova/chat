import styles from './HeaderForm.module.css'


const HeaderForm = ({content}) => {

    return (
        <>
            <div className={styles.topForm}>
                {content}
            </div>
        </>
    )
}

export default HeaderForm