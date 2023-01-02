import React from 'react'
import Calendar from '../src/components/calendar/Calendar';
import Navbar from '../src/components/Navbar';

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