import React from 'react'
import { Checkbox, Button } from '@material-ui/core'
import { useTasks } from '../TaskContext'

export default function List({ id, task, complete }) {
    const { setStatusTask, removeTask } = useTasks()

    const checkTask = e => setStatusTask(id, e.target.checked)
    const remove = () => {
        removeTask(id)
    }

    return (
        <tr>
            <td>
                <Checkbox onChange={checkTask} color="primary" />
            </td>
            <td>
                <div className={complete ? 'check' : ' '}>{task}</div>
            </td>
            <td>
                <Button variant="outlined" color="inherit" onClick={remove}>
                    Delete
                </Button>
            </td>
        </tr>
    )
}
