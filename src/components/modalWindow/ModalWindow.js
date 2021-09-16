import React from 'react';
import Modal from 'react-modal';
import styles from './ModalWindow.module.css'


const ModalWindow = ({contentModal}) => {

    const [modalIsOpen, setIsOpen] = React.useState(true);

    // function openModal() {
    //     setIsOpen(true);
    // }

    function closeModal() {
        // setIsOpen(false);
    }

    return (
        <div>
            {/*<button onClick={openModal}>Регистрация</button>*/}
            <Modal className={styles.modal} isOpen={modalIsOpen} onRequestClose={closeModal} ariaHideApp={false}>
                {contentModal}
            </Modal>
        </div>
    )
}

export default ModalWindow