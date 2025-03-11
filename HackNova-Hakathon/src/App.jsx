import { useState } from 'react'
import './App.css'
import TeacherPage from './Front-End/TeacherPage/TeacherPage'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <TeacherPage/>

    </>
  )
}

export default App
