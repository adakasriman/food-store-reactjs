import logo from './logo.svg';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import DashBoard from './components/DashBoard';
import ProtectedRoute from './ProtectedRoute';
import Header from './components/Header';
import MenuList from './components/menuList/MenuList';

function App() {
  return (
    <div className="">
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<DashBoard />} />
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/dashboard/:name" element={<MenuList />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
