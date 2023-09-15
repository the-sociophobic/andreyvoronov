import React from 'react'

import { createPortal } from 'react-dom'

import useElements from '../hooks/useElements'


const Pics: React.FC = () => {
  const restoreClosedPics = () =>
    Array.from(document.getElementsByClassName('d-none'))
      .forEach(pic => pic.classList.remove('d-none'))

  const ifLinkRestore = (e: MouseEvent) => {
    const isAffectedLink = ['link-1', 'maglink'].every(className =>
      (e.target as Element).classList.contains(className))
      && (e.target as Element).innerHTML.includes('.')

    if (isAffectedLink)
      restoreClosedPics()
  }

  React.useEffect(() => {
    setTimeout(restoreClosedPics, 500)
  }, [])

  React.useEffect(() => {
    window.addEventListener('mousedown', ifLinkRestore)

    return () => window.removeEventListener('click', ifLinkRestore)
  }, [])


  const roots = useElements('draggable', () => { }, true)

  const renderPic = (root: HTMLElement, index: number) =>
    <div
      key={index}
      className='Pic__close'
      onClick={() => root.classList.add('d-none')}
    />

  return roots.length > 0 ?
    <>
      {roots
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
