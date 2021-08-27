import React from 'react';
import Modal from 'react-modal';
import styles from './ModalWindow.module.css'
import Form from "../form/Form";
import TopForm from "../topForm/TopForm";


const ModalWindow = ({optionsInput, titleButton, content}) => {

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
                <TopForm content={content}/>
                <Form optionsInput={optionsInput} titleButton={titleButton}/>
            </Modal>
        </div>
    )
}

export default ModalWindow