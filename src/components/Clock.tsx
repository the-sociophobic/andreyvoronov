import React from 'react'

import { createPortal } from 'react-dom'
import { format } from 'date-fns'

import useNow from '../hooks/useNow'
import useElements from '../hooks/useElements'


const Clock: React.FC = () => {
  const now = useNow()
  const roots = useElements('svg-scale-wrapper')

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
      {format(now, 'm-dd-MM-yyyy')}
    </div>

  return roots.length > 0 ?
    createPortal(
      renderClock(),
      roots[0]
    )
    :
    <div />
}


export default Clock
