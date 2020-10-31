import React, { useContext, useRef, useEffect } from 'react'

import FormContext from './FormContext'

export default function Input({ name }) {
    const inputRef = useRef()
    const { registerField } = useContext(FormContext)

    useEffect(() => {
        if (inputRef.current) {
            registerField(name, inputRef.current)
        }
    }, [name, registerField]) // eslint-disable-line

    return (
        <div>
            <input name={name} ref={inputRef} />
        </div>
    )
}
