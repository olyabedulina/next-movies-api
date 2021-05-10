import React from 'react'
import PropTypes from 'prop-types'

import CM from './styles.module.css'

const Input = ({
    id = '',
    name = '',
    className = '',
    kind = '',
    type = 'text',
    value = '',
    placeholder = '',
    children,
    onChange = Function.prototype,
    onKeyDown = Function.prototype
}) => {

    return <input
        id={id}
        name={name}
        className={`${className} ${CM.input} ${CM["kind-" + kind] || ''}`}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        onKeyDown={onKeyDown}>
            {children}
        </input>
}

Input.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    className: PropTypes.string,
    kind: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.node.isRequired,
    placeholder: PropTypes.string,
    children: PropTypes.node,
    onClick: PropTypes.func,
    onKeyDown : PropTypes.func
};

export default Input
