import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import axios from 'axios';
import { Toaster } from 'react-hot-toast';

// Set axios default base URL and enable sending credentials with requests
axios.defaults.baseURL = 'http://localhost:8000';
axios.defaults.withCredentials = true;

function App() {
  return (
    <>
    <Navbar />
    <Toaster position='bottom-right' toastOptions={{duration: 2000}} /> {/* Toaster component to display notifications */}
    <Routes> {/* Router configuration */}
      <Route path='/' element={<Home />} /> {/* Route to Home page */}
      <Route path='/register' element={<Register />} /> {/* Route to Register page */}
      <Route path='/login' element={<Login />} /> {/* Route to Login page */}
    </Routes>
    </>
  );
};

export default App; // Export App component
