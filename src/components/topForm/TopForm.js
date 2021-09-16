import styles from './TopForm.module.css'


const TopForm = ({content}) => {

    return (
        <>
            <div className={styles.topForm}>
                {content}
            </div>
        </>
    )
}

export default TopForm