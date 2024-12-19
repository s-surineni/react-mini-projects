import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RefreshInterval } from './refreshInterval/refreshInterval'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RefreshInterval />
    </>
  )
}

export default App
