import React from 'react'
import Task from "../data/Task";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import sampleTasks from '../data/sampleTasks';


type Props = {
    task: Task
}

function TaskItem({ task }: Props) {
    return (
        <div className='TaskItem'>
            {/* Huge button to open detals */}
            <div className='taskItemButton'>
                {/* Checkbox button */}
                <button role="checkbox" type='button'></button>

                {/* Task content */}

                {/* Task Description */}

                {/* Tages: Maybe colors to indicate course */}
            </div>
        </div>
    )
}

export default TaskItem