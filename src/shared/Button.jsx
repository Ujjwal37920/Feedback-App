import React from 'react'
import PropTypes from 'prop-types'

function Button({children, type, version, isDisable}) {
  return (
    <button type={type} className= {`btn btn-${version}` } disabled={isDisable}>{children}</button>
  )
}

Button.defaultProps = {
    type: 'primary',
    version: 'button',
    isDisable: false
}

Button.prototype = {
    children: PropTypes.node.isRequired,
    type: PropTypes.string,
    version : PropTypes.string,
    isDisable: PropTypes.bool 
}

export default Button