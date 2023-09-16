import React from 'react'

import useElements from '../hooks/useElements'
import useTimeout from '../hooks/useTimeout'


const hashElem = (elem: any) =>
  parseInt(
    ((elem as Element).innerHTML || '0.')
      .split('.')[0]
      .replace(/[^0-9]/g, '')
  )

const getLinkHashes = () => {
  let res = []

  try {
    res = JSON.parse(localStorage.getItem('visitedLinks') || '[]')
  } catch {
    res = []
    localStorage.setItem('visitedLinks', '[]')
  }

  return res
}

const setLinkHashes = (array: (number | string)[]) =>
  localStorage.setItem('visitedLinks', ('[' + array.toString() + ']').replace(',]', ']'))


const Underline: React.FC = () => {
  useTimeout({
    delta: 100,
    onCount: () => {
      const pageFromHref = window.location.href.replace('?init', '').split('/').slice(-1)[0] || window.location.href.replace('?init', '').split('/').slice(-2)[0]
      const currentPage = parseInt(pageFromHref) - 16
      const visitedLinks = getLinkHashes()

      setLinkHashes([
        currentPage,
        visitedLinks.filter((link: any) => link + '' !== currentPage + '')
      ])
    }
  })

  const linkClasses = ['link-1', 'maglink']
  const visitedLinks = getLinkHashes()

  const linkElements = useElements('link-1 maglink', () => {}, true)
    .filter(link => visitedLinks.includes(
      hashElem(link)
    ))

  const storeVisitedLink = (e: MouseEvent) => {
    const isAffectedLink = linkClasses.every(className =>
      (e.target as Element).classList.contains(className))
      && (e.target as Element).innerHTML.includes('.')

    if (isAffectedLink) {
      const clickedLink = hashElem(e.target)

      setLinkHashes([
        clickedLink,
        ...visitedLinks.filter((link: string | number) => link + '' !== clickedLink + '')
      ])
      console.log(clickedLink)
      console.log(getLinkHashes())
    }
  }

  // React.useEffect(() => {
  //   window.addEventListener('mousedown', storeVisitedLink)

  //   return () => window.removeEventListener('click', storeVisitedLink)
  // }, [])

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
