import React from 'react'

import { createPortal } from 'react-dom'

import useElements from '../hooks/useElements'


const Pics: React.FC = () => {
  const roots: any[] = [
    // ...useElements('rmwidget widget-picture draggable'),
    ...useElements('draggable', () => {}, true)
  ]
  console.log(roots)

  const renderPic = (root: HTMLElement, index: number) =>
    <div
      key={index}
      className='Pic'
      // onClick={e => {
      //   if (e.type === 'contextmenu')
      //     e.stopPropagation()
      // }}
      // onClick={e => console.log(e.type)}
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
          renderPic(root, root.dataset['data-id']),
          root
        )
      )}
      <div />
    </>
    :
    <div />
}


export default Pics
