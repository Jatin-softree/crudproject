import Create from "./components/Create";
import Read from "./components/Read";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Update from "./components/Update";
import Login from "./components/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <>
        <Route path="/" element={<Create />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/read" element={<Read />}/>
        <Route path="/update/:id" element={<Update />}/>
        
        </>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
