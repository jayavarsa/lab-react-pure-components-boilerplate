import { PureComponent, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Simplecompound from './components/SimpleCounterComponent'
import Purecompoundse from './components/PureCounterComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      < Simplecompound/>
      < Purecompoundse/>
    </>
  )
}

export default App
