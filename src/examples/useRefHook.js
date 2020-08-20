import React, {useEffect, useRef, useState} from 'react';

import './App.css';



function App() {
    const [value, setValue] = useState('initial')
    const renderCount = useRef(1)
    const inputRef = useRef(null)
    // const prevValue = useRef('')

    useEffect(() => {
        renderCount.current++
        console.log(inputRef.current.value)
    })

    const focus = () => {
        inputRef.current.focus()
    }

    const prevValue = useRef('')
    useEffect(() => {
        prevValue.current = value
    })

    return (
        <div>
            <h1>Count: {renderCount.current}</h1>
            <h1>Prev Value: {prevValue.current}</h1>
            <input type="text"
                   onChange={(e) => setValue(e.currentTarget.value)}
                   value={value}
                   ref={inputRef}
            />
            <button onClick={focus}>Фокус</button>
        </div>
    );
}

export default App;
