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
import styles from '../../styles/Calendar.module.scss'


type Props = {
    task: Task
}

{/* Huge button to open detals */ }
{/* Checkbox button */ }
function TaskItem({ task }: Props) {
    return (
        <button className='rounded-lg ring-gray-600 ring-2 ring-solid hover:bg-gray-700 container w-full max-h-28 my-1 ' role="checkbox" type='button'>

            {/* Task content */}
            <div className="pl-2">
                {task.Title}
            </div>

            {/* Task Description */}
            <p className="m-2 max-h-4 max-w-full text-xs truncate">
                {task.Description}
            </p>

            {/* Tages: Maybe colors to indicate course */}

        </button>
    )
}


export default TaskItem