import { Route, Routes } from 'react-router-dom';
import './App.css';
import { useAuth } from './hooks/useAuth';
import Index from '../src/pages/Index'
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


function App() {

  const { user, setUser, isAuthenticated, setIsAuthenticated } = useAuth();

  // if (user == null || !isAuthenticated) {
  //   window.location.replace("/auth");
  // }

  const formData = {
    email: 'patrickkoros0@gmail.com',
    password: '1234567890'
  }

  return (
    <div className="App h-full w-full overflow-hidden select-none">
      <div className='min-w-[100vw] h-[16vh] fixed top-0 left-0 right-0'>
        <Navbar/>
      </div>

      <div className='pb-10 bg-dark'>
        <Routes>
          <Route index path='/' element={<Index/>}/>
        </Routes>
      </div>


      <div className=''>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
