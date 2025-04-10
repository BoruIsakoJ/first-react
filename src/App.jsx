import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Footer from './components/Footer'
import Main from './components/Main'
import Header from './components/Header'
import Section1 from './components/Section1'

function App() {
  return (
    <>
      <Header />
      <Main />
      <Section1 />
      <Footer />
      
    </>
  )
}

export default App
