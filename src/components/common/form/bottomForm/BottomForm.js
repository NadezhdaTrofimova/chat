import {Link} from "react-router-dom";
import style from './BottomForm.module.css'

const BottomForm = () => {
    return (
        <div className={style.link}>
            <Link to='/recover' className={style.linkBlack}>Забыли пароль?</Link>
            <Link to='/registration' className={style.linkBlue}>Регистрация</Link>
        </div>
    )
}

export default BottomForm