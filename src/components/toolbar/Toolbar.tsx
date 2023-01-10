import React from 'react'
import ToolbarButton from './ToolbarButton'
import { BsPlusLg } from 'react-icons/bs';
import { MdDelete } from 'react-icons/md';
import CreateEventModule from '../popups/CreateEventModule';
import { CreatingEvent } from '../../pages/_app';

type Props = {}

function Toolbar({ }: Props) {
    const { creatingEvent, setCreatingEvent } = CreatingEvent.useContainer();
    function addEvent(e: any): void {
        setCreatingEvent(!creatingEvent);
    }
    function deleteEvent(e: any): void {
        throw new Error('Function not implemented.');
    }

    return (
        <div className="flex flex-col items-center justify-between container min-w-fit max-w-fit mx-0 outline outline-2 px-1 py-1 rounded-lg select-none outline-neutral-700 transition-colors duration-300 shadow-md hover:shadow-lg">
            <div className="top">
                <ToolbarButton icon={<BsPlusLg />} onClick={addEvent} classes={'text-2xl'} />
            </div>

            <div className="bottom">
                <ToolbarButton icon={<MdDelete />} onClick={deleteEvent} classes={'text-3xl hover:bg-red-500 bg-opacity-30 hover:bg-opacity-100'} />
            </div>
        </div>
    )
}

export default Toolbar