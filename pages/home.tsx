import React from 'react'
import Calendar from '../src/components/CalendarMonth';
import Navbar from '../src/ui/Navbar';

type Props = {}

function calendarTesting({ }: Props) {
    return (
        <div className=''>
            <Navbar />
            <Calendar />
        </div>
    )
}

export default calendarTesting