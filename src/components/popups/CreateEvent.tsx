import React from 'react'
import { AiOutlineEnter } from 'react-icons/ai'
import { SelectedDay } from '@/pages/_app';
import { BlockPicker, SketchPicker, TwitterPicker } from "@hello-pangea/color-picker";
import * as Popover from '@radix-ui/react-popover';

type Props = {}

function CreateEventPopup({ }: Props) {
    const { selectedDayValue, setSelectedDay } = SelectedDay.useContainer();


    function createEvent(e: any): void {
        throw new Error('Function not implemented.');
    }

    function pickColor(e: any): void {
        // throw new Error('Function not implemented.');
    }

    return (
        <div className="flex flex-row gap-2 container mx-auto outline outline-2 px-2 py-2 rounded-lg select-none outline-neutral-700 transition-colors duration-300 shadow-md hover:shadow-lg">
            <div className='submit flex-grow-0 flex-shrink-0 w-12 h-auto'>

                {/* <BlockPicker /> */}
                <ColorPicker pickColor={pickColor} />
            </div>

            <div className="fields w-full flex flex-col gap-2 divide-y-2 divide-neutral-700">
                <TextField classes="text-2xl" id="title-field" placeholder="Task Name" />
                <TextField classes="text-lg" id="description-field" placeholder="Description" />
            </div>

            <div className='submit flex-grow-0 flex-shrink-0 w-12 h-auto'>
                <button
                    type="button"
                    onClick={createEvent}
                    className='flex flex-none items-center justify-center text-3xl mx-auto my-auto h-full w-full duration-150 rounded-md text-white hover:text-neutral-200 hover:bg-red-700 bg-red-500 scale-x-[-1]'>
                    {<AiOutlineEnter />}
                </button>
            </div>
        </div>
    )
}

export default CreateEventPopup

function TextField({ classes, id, placeholder }) {
    return <input className={"bg-transparent py-2 px-2 outline-none  " + classes} autoCorrect="on" spellCheck="true" type="text" id={id} placeholder={placeholder} />;
}


import { styled, keyframes } from '@stitches/react';
import { violet, mauve, blackA } from '@radix-ui/colors';
import { MixerHorizontalIcon, Cross2Icon } from '@radix-ui/react-icons';

const ColorPicker = ({ pickColor }) => (
    <Popover.Root>
        <Popover.Trigger asChild>
            <div
                className='flex flex-none items-center justify-center text-3xl mx-auto my-auto h-full w-full duration-150 rounded-md text-white hover:text-neutral-200 hover:bg-red-700 bg-red-500 scale-x-[-1]'>
            </div>
        </Popover.Trigger>
        <Popover.Portal>
            <PopoverContent sideOffset={5}>
                <div className="flex flex-col gap-10">
                    <p className='mb-10'>Dimensions</p>
                    <fieldset>
                        <label htmlFor="width">Width</label>
                        <input id="width" defaultValue="100%" />
                    </fieldset>
                    <fieldset>
                        <label htmlFor="maxWidth">Max. width</label>
                        <input id="maxWidth" defaultValue="300px" />
                    </fieldset>
                    <fieldset>
                        <label htmlFor="height">Height</label>
                        <input id="height" defaultValue="25px" />
                    </fieldset>
                    <fieldset>
                        <label htmlFor="maxHeight">Max. height</label>
                        <input id="maxHeight" defaultValue="none" />
                    </fieldset>
                </div>
                <PopoverClose aria-label="Close">
                    <Cross2Icon />
                </PopoverClose>
                <PopoverArrow />
            </PopoverContent>
        </Popover.Portal>
    </Popover.Root >
);

const slideUpAndFade = keyframes({
    '0%': { opacity: 0, transform: 'translateY(2px)' },
    '100%': { opacity: 1, transform: 'translateY(0)' },
});

const slideRightAndFade = keyframes({
    '0%': { opacity: 0, transform: 'translateX(-2px)' },
    '100%': { opacity: 1, transform: 'translateX(0)' },
});

const slideDownAndFade = keyframes({
    '0%': { opacity: 0, transform: 'translateY(-2px)' },
    '100%': { opacity: 1, transform: 'translateY(0)' },
});

const slideLeftAndFade = keyframes({
    '0%': { opacity: 0, transform: 'translateX(2px)' },
    '100%': { opacity: 1, transform: 'translateX(0)' },
});

const PopoverContent = styled(Popover.Content, {
    borderRadius: 4,
    padding: 20,
    width: 260,
    backgroundColor: 'white',
    boxShadow: 'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
    animationDuration: '400ms',
    animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
    willChange: 'transform, opacity',
    '&[data-state="open"]': {
        '&[data-side="top"]': { animationName: slideDownAndFade },
        '&[data-side="right"]': { animationName: slideLeftAndFade },
        '&[data-side="bottom"]': { animationName: slideUpAndFade },
        '&[data-side="left"]': { animationName: slideRightAndFade },
    },
    '&:focus': {
        boxShadow: `hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px, 0 0 0 2px ${violet.violet7}`,
    },
});

const PopoverArrow = styled(Popover.Arrow, {
    fill: 'white',
});

const PopoverClose = styled(Popover.Close, {
    all: 'unset',
    fontFamily: 'inherit',
    borderRadius: '100%',
    height: 25,
    width: 25,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: violet.violet11,
    position: 'absolute',
    top: 5,
    right: 5,

    '&:hover': { backgroundColor: violet.violet4 },
    '&:focus': { boxShadow: `0 0 0 2px ${violet.violet7}` },
});

const Flex = styled('div', { display: 'flex' });

const IconButton = styled('button', {
    all: 'unset',
    fontFamily: 'inherit',
    borderRadius: '100%',
    height: 35,
    width: 35,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: violet.violet11,
    backgroundColor: 'white',
    boxShadow: `0 2px 10px ${blackA.blackA7}`,
    '&:hover': { backgroundColor: violet.violet3 },
    '&:focus': { boxShadow: `0 0 0 2px black` },
});
const Fieldset = styled('fieldset', {
    all: 'unset',
    display: 'flex',
    gap: 20,
    alignItems: 'center',
});

const Label = styled('label', {
    fontSize: 13,
    color: violet.violet11,
    width: 75,
});

const Input = styled('input', {
    all: 'unset',
    width: '100%',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    flex: '1',
    borderRadius: 4,
    padding: '0 10px',
    fontSize: 13,
    lineHeight: 1,
    color: violet.violet11,
    boxShadow: `0 0 0 1px ${violet.violet7}`,
    height: 25,

    '&:focus': { boxShadow: `0 0 0 2px ${violet.violet8}` },
});

const Text = styled('p', {
    margin: 0,
    color: mauve.mauve12,
    fontSize: 15,
    lineHeight: '19px',
    fontWeight: 500,
});
