import React, {useState} from 'react';

import './App.css';

function calculateInitialState() {
    console.log('Some calculations')
    return Math.trunc(Math.random() * 20)
}

function App() {
    const [counter, setCounter] = useState(() => calculateInitialState())
    const [state, setState] = useState({
        title: 'title',
        date: Date.now()
    })

    const updateTitle = () => {
        setState(prev => {
            return {
                ...prev,
                title: 'Новое название'
            }
        })
    }
    const increment = () => {
        setCounter(prev => prev + 1)
    }
    const decrement = () => {
        setCounter(counter - 1)
    }

    return (
        <div>
            <h1>Счетчик:{counter}</h1>
            <button onClick={increment} className={'btn btn-success'}>Добавить</button>
            <button onClick={decrement} className={'btn btn-danger'}>Убавить</button>
            <button onClick={updateTitle} className={'btn btn-danger'}>Изменить название</button>

            <pre>{JSON.stringify(state, null, 2)}</pre>
        </div>
    );
}

export default App;
