import './output.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from './routes/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<>homepage</>} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
