import React from 'react'

import useCounter from './useTimeout'


const useNow = (): number => {
  const [now, setNow] = React.useState<number>(new Date().getTime())
  const update = () => {
    setNow(new Date().getTime())
  }

  useCounter({
    delta: 1000,
    onCount: update
  })

  return now
}


export default useNow
