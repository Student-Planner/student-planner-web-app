import React from 'react'
import { Task } from '@prisma/client';


type Props = {
    task: Task
}

{/* Huge button to open detals */ }
{/* Checkbox button */ }
function TaskItem({ task }: Props) {
    return (
        <button className='rounded-lg ring-gray-600 ring-2 ring-solid hover:bg-gray-700 container w-full max-h-28 my-1 ' role="checkbox" type='button' aria-checked>

            {/* Task content */}
            <div className="pl-2">
                {task.title}
            </div>

            {/* Task Description */}
            <p className="m-2 max-h-4 max-w-full text-xs truncate">
                {task.description}
            </p>

            {/* Tages: Maybe colors to indicate course */}

        </button>
    )
}


export default TaskItem