import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ListarBandas from './components/listarBandas';
import DetailBanda from './components/detailBanda'
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
       <Routes>
         <Route path="/" element={<ListarBandas />} />
         <Route path="/bandas/:bandaId" element={<DetailBanda />} />
       </Routes>
     </BrowserRouter>
   </div>
  );
}

export default App;
