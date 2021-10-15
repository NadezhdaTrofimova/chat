import React from 'react';

import styles from './ModalWindow.module.css'

const ModalWindow = ({contentModal, bottom}) => {

    return (
        <div>
            <div
                className={styles.popup}
                bottom={bottom}>
                {contentModal}
            </div>
        </div>
    )
}

export default ModalWindow