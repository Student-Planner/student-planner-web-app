import React from 'react'
import gsap from "gsap";
const { useRef, useState, useEffect, createRef } = React

type Props = {}

function magneticButton({ }: Props) {


    /*--------------------
    Magnetic Button
    --------------------*/
    const MagneticButton = ({
        children,
        className,
        speed = 1,
        tollerance = 0.8,
        scale = 1.2,
        debug = false,
        borderRadius = 0,
        ...props
    }) => {
        const $root = useRef(null)
        const $item = useRef(null)
        const $hover = useRef(null)
        const rootBound = useRef(null)
        const itemBound = useRef(null)
        const diffBound = useRef({ x: 0, y: 0 })

        const handleMouseEnter = () => {
            gsap.killTweensOf($item.current)
            gsap.set($hover.current, {
                scale: scale,
                borderRadius,
                background: debug ? 'rgba(0, 125, 255, .4)' : 'transparent',
            })

            rootBound.current = $root.current.getBoundingClientRect()
            itemBound.current = $item.current.getBoundingClientRect()
            diffBound.current.x = (rootBound.current.width * scale - rootBound.current.width) / 2
            diffBound.current.y = (rootBound.current.height * scale - rootBound.current.height) / 2
        }

        const handleMouseLeave = () => {
            gsap.killTweensOf($item.current)
            gsap.to($item.current, {
                x: 0,
                y: 0,
                ease: 'elastic.out(1.1, .4)',
                duration: 1.2
            })
            gsap.set($hover.current, {
                scale: 1
            })
        }

        const handleMouseMove = (e) => {
            const x = e.clientX || e.touches[0].clientX
            const y = e.clientY || e.touches[0].clientY

            const maxX = (rootBound.current.width - itemBound.current.width) / 2 * tollerance
            const maxY = (rootBound.current.height - itemBound.current.height) / 2 * tollerance

            const newX = gsap.utils.mapRange(
                0,
                rootBound.current.width * scale,
                -maxX,
                maxX,
                x - rootBound.current.x + diffBound.current.x
            )

            const newY = gsap.utils.mapRange(
                0,
                rootBound.current.height * scale,
                -maxY,
                maxY,
                y - rootBound.current.y + diffBound.current.y
            )

            gsap.killTweensOf($item.current)
            gsap.to($item.current, {
                x: newX,
                y: newY,
                ease: 'power3.out',
                duration: speed
            })
        }

        return (
            <button
                ref={$root}
                className={`magnetic-button ${className}`}
                onMouseEnter={handleMouseEnter}
                onMouseMove={handleMouseMove}
                onTouchMove={handleMouseMove}
                onTouchStart={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onTouchEnd={handleMouseLeave}
                {...props}
            >
                <span
                    ref={$item}
                    className="magnetic-button--item"
                >
                    {children}
                </span>
                <span
                    ref={$hover}
                    className="magnetic-button--hover"
                />
            </button>
        )
    }


    /*--------------------
    App
    --------------------*/
    return (
        <div className="App">
            <MagneticButton
                className="button-1"
                scale={1.5}
                tollerance={.8}
                speed={0.5}
                borderRadius={30}
                onClick={() => {
                    console.log('click')
                }}
            >
                Button
            </MagneticButton>

            <MagneticButton
                className="button-2"
                scale={2}
                tollerance={.8}
                speed={.3}
                borderRadius={50}
                onClick={() => {
                    console.log('click')
                }}
            >
                Hello
            </MagneticButton>

            <MagneticButton
                className="button-1"
                style={{ backgroundColor: 'transparent' }}
                scale={2}
                tollerance={.8}
                speed={.3}
                borderRadius={50}
                onClick={() => {
                    console.log('click')
                }}
            >
                <MagneticButton
                    className="button-1"
                    scale={4}
                    tollerance={1}
                    speed={.5}
                    borderRadius={50}
                    onClick={() => {
                        console.log('click')
                    }}
                >
                    Inception
                </MagneticButton>
            </MagneticButton>
        </div>
    )

}

export default magneticButton