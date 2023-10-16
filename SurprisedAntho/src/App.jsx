//import { useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import CardList from "./components/CardList"
import './App.css'

function App() {
 // const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <CardList />
      <Footer />
    </>
  )
}

export default App
