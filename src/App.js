import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './assets/css/base/base.css';
import './assets/css/componentes/card.css'
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Pages404 from './pages/Pages404';
import Header from './Components/Header';
import Post from './pages/Post';
import Categoria from './pages/Categoria';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="posts/:id" element={<Post />} />
        <Route path='/categoria/:id/*' element={<Categoria />} />
        < Route path="*" element={<Pages404 />} />
      </Routes>
    </Router>
  );
}

export default App;
