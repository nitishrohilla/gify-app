import React from 'react'
import classes from './Input.module.css'

const Input = (props) => {
    return (
        <>
            <input type={props} ref={props.inputRef} className={classes.input }/>
        </>
    )
}

export default Input
