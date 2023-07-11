import { useState } from 'react'
import SideNav from './components/SideNav'
import Main from './components/Main'
import Interest from './components/Interest'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {

  return (
    <div>
      <SideNav />
      <Main />
      <Interest />
      <Projects /> 
      <Contact />
    </div>
  )
}

export default App
