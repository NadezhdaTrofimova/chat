import React from 'react';
import Modal from 'react-modal';
import styles from './ModalWindow.module.css'
import Form from "../form/Form";
import TopForm from "../topForm/TopForm";
import MiddleForm from "../middleForm/MiddleForm";


const ModalWindow = ({optionsInput, titleButton, content, icon}) => {

    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div>
            <button onClick={openModal}>Регистрация</button>
            <Modal className={styles.modal} isOpen={modalIsOpen} onRequestClose={closeModal} ariaHideApp={false}>
                <TopForm content={content} icon={icon}/>
                <MiddleForm/>
                <Form optionsInput={optionsInput} titleButton={titleButton}/>
            </Modal>
        </div>
    )
}

export default ModalWindow