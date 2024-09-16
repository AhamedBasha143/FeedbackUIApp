import { isDisabled } from '@testing-library/user-event/dist/utils'
import ProptTypes from 'prop-types'
import React, { version } from 'react'

function Button({children, version, type, isDisabled}) {
  return (
    <button type={type} disabled={isDisabled} className={`btn btn-${version}`}>
        {children}
    </button>
  )
}

Button.defaultProps = {
    version : 'primary',
    type: 'button',
    isDisabled: false
}

Button.ProptTypes = {
    children: ProptTypes.node.isRequired,
    version: ProptTypes.string,
    type: ProptTypes.string,
    isDisabled: ProptTypes.bool,

}

export default Button
