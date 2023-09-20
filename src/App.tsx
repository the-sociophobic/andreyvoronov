import Clock from './components/Clock'
import Pics from './components/Pics'
import Underline from './components/Underline'

import './assets/styles/index.sass'


const App = () => {

  return (
    <div className='App'>
      <Pics />
      <Underline />
      <Clock />
    </div>
  )
}


export default App
