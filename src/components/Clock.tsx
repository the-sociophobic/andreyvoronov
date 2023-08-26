import React from 'react'

import { createPortal } from 'react-dom'
import { format } from 'date-fns'

import useNow from '../hooks/useNow'
import useElements from '../hooks/useElements'


const Clock: React.FC = () => {
  const now = useNow()
  const roots = useElements('svg-scale-wrapper')
  const width = roots.length > 0 ? roots[0].getBoundingClientRect().width : 0

  const renderClock = () =>
    <div
      className='Clock'
      style={{
        fontFamily: 'custom_85891',
        fontWeight: 400,
        fontStyle: 'normal',
        fontSize: `${width / 2}px`,
        lineHeight: `${width / 1.2}px`,
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
