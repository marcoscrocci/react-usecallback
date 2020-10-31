import React, { useState, useCallback } from 'react'

import FormContext from './FormContext'

export default function Form({ children }) {
    const [inputs, setInputs] = useState([])

    const registerField = useCallback((name, ref) => {
        setInputs(oldInputs => [...oldInputs, { name, ref }])
        //setInputs([...inputs, { name, ref }])
    }, [])

    const handleSubmit = (data) => {
        alert(JSON.stringify(data))
    }

    return (
        <form onSubmit={handleSubmit}>
            <FormContext.Provider value={{ registerField }}>
                {children}
            </FormContext.Provider>
        </form>
    )
}
