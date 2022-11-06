import React, { useEffect, useState } from 'react'
import TaskItem from '../src/components/TaskItem';
import sampleTasks from '../src/data/sampleTasks';
import Task from '../src/Task';

type Props = {}

function tasks({ }: Props) {

    const [tasks, setTasks] = useState<Task[]>([]);

    useEffect(() => {
        logData();
    }, []);

    console.log(tasks);

    function logData() {
        setTasks(sampleTasks);

    }

    console.log(tasks);

    // function getTasks() {
    //     const tasksCollectionRef = collection(db, "tasks").withConverter(taskConverter);
    //     const tasksQuery = query(tasksCollectionRef)
    //     const [tasksData, loading, error] = useCollectionData(tasksQuery);
    //     if (!loading) {
    //         // setTasks(tasksData)
    //         console.log(tasksData);
    //     }
    // }
    return (
        <div className='grid grid-rows-2'>
            {/* {tasks.map((task) => {
                return <TaskItem key={task.Id} task={task} />
            })} */}
        </div>
    )
}

export default tasks


