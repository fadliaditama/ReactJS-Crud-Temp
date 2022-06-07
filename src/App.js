import React from 'react';
import Navbar from "./component/Navbar";
import Beranda from "./component/Beranda";
import ManajemenKeuangan from './component/ManajemenKeuangan';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="container mx-auto py-10">
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path='/' element={<Beranda />} />
          <Route path='/manajemen-keuangan' element={<ManajemenKeuangan />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
