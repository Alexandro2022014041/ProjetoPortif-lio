import { useState } from 'react'
import { Home } from './pages/home/home'
export const App = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      <Home/>
    </>
  )
}
