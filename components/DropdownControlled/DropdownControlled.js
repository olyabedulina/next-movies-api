import React from 'react'
import PropTypes from 'prop-types'

import CM from './styles.module.css'

const DropdownControlled = ({
    className = '',
    theme = '',
    placeholder,
    children,
    isOpened,
    onIsOpenedChange
}) => {

    function handleTriggerClick() {
        onIsOpenedChange()
    }

    return <div className={`${className} ${CM["theme-" + theme] || ''} ${CM.dropdown} ${isOpened ? CM.opened : ''}`}>
        <div className={CM.dropdownInput} onClick={handleTriggerClick}>
            <div className={CM.dropdownPlaceholder}>{placeholder}</div>
            <div className={`${CM.dropdownInputButton} ${isOpened ? CM.dropdownInputButtonDown : CM.dropdownInputButtonUp}`} />
        </div>
        {isOpened && <div className={CM.dropdownList}>{children}</div>}

    </div>
}

DropdownControlled.propTypes = {
    className: PropTypes.string,
    placeholder: PropTypes.string,
    children: PropTypes.array,
    isOpened: PropTypes.bool,
    onIsOpenedChange : PropTypes.func
};

export default DropdownControlled
