import { Route, Routes } from 'react-router-dom'
import Navbar from './components/common/navbar/Navar'
import Footer from './components/common/footer/Footer'
import './App.css'
import Home from './pages/home/Home'
import Modal from './components/modal/Modal'
import { useSelector } from 'react-redux'

function App() {

  const {isOpen} = useSelector((state) => state.modal)

  return (
    <>
      {isOpen && <Modal/>}
      <Navbar/>
      <Routes>
          <Route path='/' element={<Home/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App