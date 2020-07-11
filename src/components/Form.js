import React, { useState } from 'react'
import { Button, Grid, TextField } from '@material-ui/core'
import { useTasks } from '../TaskContext'

export default function Form() {
    const [task, setTask] = useState('')
    const { addTask } = useTasks()

    const onSubmit = e => {
        e.preventDefault()
        addTask(task)
        setTask('')
    }

    return (
        <>
            <Grid container>
                <form onSubmit={onSubmit}>
                    <Grid container item xs>
                        <TextField
                            value={task}
                            label="add your note"
                            onChange={e => setTask(e.target.value)}
                            variant="outlined"
                        />
                        <Button
                            style={{ marginLeft: 10 }}
                            type="submit"
                            color="primary"
                            variant="contained"
                            disabled={task === ''}
                        >
                            Submit
                        </Button>
                    </Grid>
                </form>
            </Grid>
        </>
    )
}
