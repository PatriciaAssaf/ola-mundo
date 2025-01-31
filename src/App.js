import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Inicio from './paginas/inicio';
import SobreMim from './paginas/SobreMim';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/sobremim" element={<SobreMim />} />
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
    </BrowserRouter>  
  );
}

export default App;
