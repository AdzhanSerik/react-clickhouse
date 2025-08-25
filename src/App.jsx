import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';

import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Menu from './components/common/Menu';

export default function App() {
  return (
    <div>
      <Header /> {/* Этот компонент будет виден на всех страницах */}
      <Menu />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* Можно добавить маршрут для страницы "Не найдено" */}
        <Route path="*" element={<div>404 - Страница не найдена</div>} />
      </Routes>
      <Footer /> {/* И этот тоже */}
    </div>
  )
}