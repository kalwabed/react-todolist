import React from 'react'
import { Grid, Card } from '@material-ui/core'
import List from './List'
import { useTasks } from '../TaskContext'

export default function Table() {
    const { tasks } = useTasks()

    return (
        <>
            <Card>
                <table>
                    <tbody>
                        <Grid container spacing={1}>
                            <Grid item xs={3}>
                                {tasks.map((task, i) => (
                                    <List key={i * 2} {...task} />
                                ))}
                            </Grid>
                        </Grid>
                    </tbody>
                </table>
            </Card>
        </>
    )
}
