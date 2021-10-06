import React from 'react';
// import Modal from 'react-modal';
import styles from './ModalWindow.module.css'

const ModalWindow = ({contentModal, bottomForm}) => {

    // const [modalIsOpen, setIsOpen] = React.useState(true);
    //
    // function openModal() {
    //     setIsOpen(true);
    // }
    //
    //
    // function closeModal() {
    //     setIsOpen(false);
    // }

    return (
        <div>
            {/*<button onClick={openModal}>Регистрация</button>*/}
            {/*<Modal className={styles.modal} isOpen={modalIsOpen} onRequestClose={closeModal} ariaHideApp={false} bottomForm={bottomForm}>*/}
            {/*    {contentModal}*/}
            {/*</Modal>*/}
            <div
                className={styles.popup}
                bottomForm={bottomForm}>
                {contentModal}
            </div>
        </div>
    )
}

export default ModalWindow