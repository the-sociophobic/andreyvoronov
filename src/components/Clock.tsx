import React from 'react'

import { createPortal } from 'react-dom'
import { format } from 'date-fns'

import useNow from '../hooks/useNow'
import useElements from '../hooks/useElements'


const initial_date = 946695600


const Clock: React.FC = () => {
  const time_distance = useNow() - initial_date
  const roots = useElements('svg above-all-fade fade-in')
  const height = roots.length > 0 ? roots[0].getBoundingClientRect().height : 0

  const renderClock = () =>
    <div
      className='Clock'
      style={{
        fontFamily: 'custom_85891',
        fontWeight: 400,
        fontStyle: 'normal',
        fontSize: `${height / 2}px`,
        // fontSize: `20px`,
        lineHeight: `${height / 1.4}px`,
      }}
    >
      {format(time_distance, 'ss-mm-HH-dd-MM-yy')}
    </div>

    // return renderClock()
  return roots.length > 0 ?
    createPortal(
      renderClock(),
      roots[0]
    )
    :
    <div />
}


export default Clock
