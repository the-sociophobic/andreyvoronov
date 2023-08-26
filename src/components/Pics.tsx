import React from 'react'

import { createPortal } from 'react-dom'

import useElements from '../hooks/useElements'


const Pics: React.FC = () => {
  const roots: any[] = useElements('rmwidget widget-picture draggable dragging')

  const renderPic = (root: HTMLElement) =>
    <div
      className='Pic'
    >
      <div
        className='Pic__close'
        onClick={() => root.classList.add('d-none')}
      />
    </div>

  return roots.length > 0 ?
    <>
      {roots
      // .filter(elem => !elem.classList.contains('mapped'))
      .map(root =>
        createPortal(
          renderPic(root),
          root
        )
      )}
      <div />
    </>
    :
    <div />
}


export default Pics
