import React from 'react'

import { createPortal } from 'react-dom'


const wrapperName = 'rmwidget widget-picture draggable dragging'


const Pics: React.FC = () => {
  const [roots, setRoots] = React.useState<any[]>([])

  React.useEffect(() => {
    const wrappers = Array.from(
      document.getElementsByClassName(wrapperName)
    )
    if (wrappers.length > 0)
      setRoots(wrappers)
    else
      console.log(`no node with class ${wrapperName}`)
  }, [])

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
    roots.map(root =>
      createPortal(
        renderPic(root),
        root
      )
    )
    :
    <div />
}


export default Pics
