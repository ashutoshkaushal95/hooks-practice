import React, { useEffect } from 'react'
import { useState } from 'react'

const UseEffectHook2 = () => {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const handleResize = () => {
        setWindowWidth(window.innerWidth)
    }

    useEffect(() =>{
        window.addEventListener('resize', handleResize)
    }, [])

  return (
    <div>{windowWidth}</div>
  )
}

export default UseEffectHook2