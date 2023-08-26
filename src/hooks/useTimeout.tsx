import React, { useRef, useState, useEffect } from 'react'


export type useCounterProps = {
  delta: number
  max_counter: number
  onStop: () => void
  onCount: () => void
}


const useCounter = (props: useCounterProps) => {
  const [counter, setCounter] = React.useState(0)

  React.useEffect(() => {
    if (counter >= props.max_counter) {
      props.onStop?.()
      return
    }

    const timeout = setTimeout(() => {
      setCounter(counter + 1)
      props.onCount?.()
    }, props.delta)

    return () => clearTimeout(timeout)
  }, [counter])

  return []
}


export default useCounter
