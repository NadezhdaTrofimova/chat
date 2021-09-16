import styles from './MiddleForm.css'


const MiddleForm = ({content, icon}) => {

    return (
        <>
            <div className={styles.topForm}>
                {content}
                <img src={icon}/>
            </div>
        </>
    )
}

export default MiddleForm