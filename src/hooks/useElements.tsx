import React, { useRef, useState, useEffect } from 'react'
import useCounter from './useTimeout'


const max_counter = 7


const useElements = (className: string, onFound?: () => void) => {
  const [elements, setElements] = useState<any[]>([])

  useCounter({
    delta: 300,
    // max_counter,
    onStop: () => { console.log(`elements of class ${className} weren't found after ${max_counter} tries`) },
    onCount: () => {
      if (elements.length > 0)
        return

      setElements(Array.from(
        document.getElementsByClassName(className)
      ))

      console.log(`found ${elements.length} elements of class ${className}`)
    }
  })
  
  return elements
}


export default useElements
