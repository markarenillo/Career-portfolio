import React from 'react'
import './ProgressBar.css'
import PropType from'prop-types'

const ProgressBar = ({value, max}) => {
    return (
        <progress className = " w3-round" value = {value} max = {max} />
    )
}

ProgressBar.propType = {
    value: PropType.number.isRequired,
    max: PropType.number
}

ProgressBar.defaultProps = {
    max: 100
}


export default ProgressBar
