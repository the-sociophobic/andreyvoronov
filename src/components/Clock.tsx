import React from 'react'

import { createPortal } from 'react-dom'
import { format } from 'date-fns'

import useNow from '../hooks/useNow'


const wrapperName = 'svg-scale-wrapper'


const Clock: React.FC = () => {
  const now = useNow()
  const [root, setRoot] = React.useState<any>(null)

  React.useEffect(() => {
    const wrappers = Array.from(
      document.getElementsByClassName(wrapperName)
    )
    if (wrappers.length > 0)
      setRoot(wrappers[0])
    else
      console.log(`no node with class ${wrapperName}`)
  }, [])

  const renderClock = () =>
    <div
      className='Clock'
      style={{
        fontFamily: 'custom_85891',
        fontWeight: 400,
        fontStyle: 'normal',
        fontSize: '25px'
      }}
    >
      {format(now, 'dd-MM-yyyy')}
    </div>

  return root ?
    createPortal(
      renderClock(),
      root
    )
    :
    <div />
}


export default Clock
