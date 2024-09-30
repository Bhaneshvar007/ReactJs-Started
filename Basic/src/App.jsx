import './App.css'
import About from './Componnt/About'
import Contect from './Componnt/Contect'
import Navbar from './Componnt/Navbar'
import Service from './Componnt/Service'
import Help from './Componnt/Help'
import { useState } from 'react'

function App() {

  const [IsAbout, setAboutVisible] = useState(false)
  const [IsContect, setContectVisible] = useState(true)
  const [IsService, setServiceVisible] = useState(false)
  const [IsHelp, setHelpVisible] = useState(false)

  const IsAboutOpen = () => {
    setAboutVisible(true)
  }

  const IsContectOpen = () => {
    setContectVisible(true)
  }

  const IsServiceOpen = () => {
    setServiceVisible(true)
  }

  const IsHelpOpen = () => {
    setHelpVisible(true)
  }


  const IsCheck=()=>{
    
  }

  return (
    <div className='w-[1400px] m-auto'>
      <Navbar
        IsAboutOpen={IsAboutOpen}
        IsContectOpen={IsContectOpen}
        IsServiceOpen={IsServiceOpen}
        IsHelpOpen={IsHelpOpen}
      />

      <About
        IsAbout={IsAbout}
      />

      <Contect
        IsContect={IsContect}
      />

      <Service
        IsService={IsService}
      />

      <Help
        IsHelp={IsHelp}

      />
    </div>

  )
}

export default App
