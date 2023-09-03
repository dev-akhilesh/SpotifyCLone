import './output.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from './routes/Login';
import Signup from './routes/Signup';
import Home from './routes/Home';

function App() {
  return (
    <div className="w-screen h-screen font-poppins">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<>homepage</>} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/home' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
