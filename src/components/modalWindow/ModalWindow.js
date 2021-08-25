import Form from "../form/Form";
import './ModalWindow.css'


const ModalWindow = ({active, setActive, children}) => {
    return (
        <div className={active ? 'modalWindow.active' : 'modalWindow'} onClick={()=>setActive(false)}>
            <div className={active ? 'modalContent.active' : 'modalContent'} onClick={e => e.stopPropagation()}>modal</div>
            {children}
        </div>
    )
}

export default ModalWindow