import Login from './page/Login.js'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './page/Register.js';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="*" element={<div/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;