import React from 'react'
import PropTypes from 'prop-types'

import CM from './styles.module.css'

const Checkbox = ({
    className = '',
    checked = false,
    onChange = Function.prototype,
    data,
    children
}) => {

    function handleChange(event) {
         onChange(!checked, data)
    }

    return <label className={CM.checkboxLabel}>
            <input
                name={name}
                className={`${className} ${CM.checkbox}`}
                type="checkbox"
                checked={checked}
                onChange={handleChange}
            />
            <span className={CM.checkboxText}>{children}</span>
        </label>
}

Checkbox.propTypes = {
    className: PropTypes.string,
    checked: PropTypes.bool,
    onChange: PropTypes.func,
    data: PropTypes.string,
    children: PropTypes.string
};


export default Checkbox
