import './App.css'
import Landing from '../pages/Landing.jsx'
import Footer from '../components/Footer.jsx'
import {Routes, Route} from 'react-router-dom';


function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Landing />} />
    </Routes>
    <Footer />
    </>
  )
}

export default App
