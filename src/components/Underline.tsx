import React from 'react'

import useElements from '../hooks/useElements'


const hashElem = (elem: any) =>
  parseInt(
    ((elem as Element).innerHTML || '0.')
      .split('.')[0]
      .replace(/[^0-9]/g, '')
  )

const getLinkHashes = () =>
  JSON.parse(localStorage.getItem('visitedLinks') || '[]')

const setLinkHashes = (array: (number | string)[]) =>
  localStorage.setItem('visitedLinks', '[' + array.toString() + ']')


const Underline: React.FC = () => {
  const linkClasses = ['link-1', 'maglink']
  const [visitedLinks, setVisitedLinks] = React.useState(getLinkHashes())

  const linkElements = useElements('link-1 maglink', () => { }, true)
    .filter(link => visitedLinks.includes(
      hashElem(link)
    ))

  const storeVisitedLink = (e: MouseEvent) => {
    const isAffectedLink = linkClasses.every(className =>
      (e.target as Element).classList.contains(className))
      && (e.target as Element).innerHTML.includes('.')

    if (isAffectedLink) {
      const clickedLink = hashElem(e.target)

      // setVisitedLinks([
      //   clickedLink,
      //   ...visitedLinks.filter((link: string | number) => link + '' !== clickedLink + '')
      // ])
      // setTimeout(() => {
        setLinkHashes([
          clickedLink,
          ...visitedLinks.filter((link: string | number) => link + '' !== clickedLink + '')  
        ])
        console.log(clickedLink)
        console.log(getLinkHashes())
      // }, 10)

      // console.log(getLinkHashes())
    }
  }

  React.useEffect(() => {
    window.addEventListener('mousedown', storeVisitedLink)

    return () => window.removeEventListener('click', storeVisitedLink)
  }, [])

  React.useEffect(() => {
    linkElements
      .forEach(link => link.classList.remove('visited'))

    // console.log(linkElements
    //   .filter(link => hashElem(link) + '' !== visitedLinks[0] + '')
    //   .map(link => hashElem(link))
    // )
    linkElements
      .filter(link => hashElem(link) + '' !== visitedLinks[0] + '')
      .forEach(link => link.classList.add('visited'))
  }, [linkElements])

  return <div />
}


export default Underline
