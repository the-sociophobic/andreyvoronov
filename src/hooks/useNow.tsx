import React from 'react'


const useNow = (): number => {
  const [now, setNow] = React.useState<number>(new Date().getTime())

  const update = () => {
    setNow(new Date().getTime())
  }

  React.useEffect(() => {
    const interval = setInterval(
      () => update(),
      60,
    )
    return () => clearInterval(interval)
  })

  return now
}


export default useNow
