import './index.css';
import HomePage from './pages/homePage';
import ServicesPage from './pages/servicesPage';
import Layout from './layouts/Layouts';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ContactPage from './pages/ContactPage';
import Notfound from './pages/Notfound';
import StorePage from './pages/storePage';
import Login from './pages/loginPage';
import AdminDashboard from './pages/adminDashboard';
function App() {
  return (

    <div>

      <BrowserRouter> 
        <Layout>
          <Routes>
            <Route path='/' element={<HomePage />} /> //moi route la 1 duong dan chua 1 component page // khong the co 1 route trung path
            <Route path='/service' element={<ServicesPage />} />
            <Route path='/login' element={<Login />} />
            <Route path='/store' element={<StorePage />} />
            <Route path='/contact' element={<ContactPage />} />
            <Route path='/admin' element={<AdminDashboard />} />
            <Route path='*' element={<Notfound />} />
          </Routes>
        </Layout>
      </BrowserRouter>


    </div>
  );
}

export default App;
