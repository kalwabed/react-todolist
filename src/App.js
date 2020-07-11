import React from 'react'
import { Container } from '@material-ui/core'
import './App.css'
import Task from './TaskContext'
import Form from './components/Form'
import Table from './components/Table'

function App() {
    return (
        <div className="App">
            <Container fixed>
                <h1>Create to-do App</h1>
                <Task>
                    <Form />
                    <Table />
                </Task>
            </Container>
        </div>
    )
}

export default App
