import React from 'react'
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types'

import CM from './styles.module.css'

const Modal = ({
    children,
    title,
    onModalClose = Function.prototype
}) => {

    const defaultPlaceholder = document.createElement('div')

    function handleCloseButtonClick(event) {
        event.preventDefault();
        onModalClose();
    }

    return createPortal(<>
        <div className={CM.modalOverlay}></div>
        <div data-testid="modal" className={CM.modal}>
            <div className={CM.modalTitle}>{title}</div>
            <a data-testid="modalClose" href="#" className={CM.modalClose} onClick={handleCloseButtonClick}>&#10005;</a>
            <div className={CM.modalContainer}>
                {children}
            </div>
        </div>
    </>, document.getElementById("app") || defaultPlaceholder)
}

Modal.propTypes = {
    children: PropTypes.node,
    title: PropTypes.string,
    onModalClose: PropTypes.func
};

export default Modal
