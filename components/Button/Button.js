import React from 'react'
import PropTypes from 'prop-types'

import CM from './styles.module.css'

const Button = ({
    type = 'button',
    className = '',
    kind = 'main',
    children,
    onClick = Function.prototype
}) => {
    function handleClick() {
        onClick();
    }

    return <button
        className={`${className} ${CM.button} ${CM["kind-" + kind] || ''}`}
        type={type}
        onClick={handleClick}>
            {children}
        </button>
}

Button.propTypes = {
    type: PropTypes.string,
    className: PropTypes.string,
    kind: PropTypes.string,
    children: PropTypes.node,
    onClick: PropTypes.func
};

export default Button
