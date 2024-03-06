
import './App.css'
import Homepage from './pages/Homepage'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import Presale from './pages/Presale';
function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Navigate to="/" />} />
          <Route path="/" element={<Homepage />} />
          <Route path="Presale" element={<Presale />} />
        </Routes>

      </BrowserRouter>


    </>
  )
}

export default App
