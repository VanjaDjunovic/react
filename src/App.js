
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import OrdersPage from './components/OrdersPage';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='*' element={<OrdersPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
