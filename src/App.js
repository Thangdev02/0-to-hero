import './index.css';
import HomePage from './pages/homePage';
import Layout from './layouts/Layouts';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ContactPage from './pages/ContactPage';
import Notfound from './pages/Notfound';
import StorePage from './pages/storePage';
import Login from './pages/loginPage';
import AdminDashboard from './pages/adminDashboard';
import PrivateRouter from './routes/privateRouter';
function App() {
  return (

    <div>

      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path='/' element={<PrivateRouter emlement={HomePage} role='user' />} /> //moi route la 1 duong dan chua 1 component page // khong the co 1 route trung path
            <Route path='/login' element={<Login />} />
            <Route path='/store' element={<PrivateRouter element={StorePage} role='user' />} />
            <Route path='/contact' element={<ContactPage />} />
            <Route path='/admin' element={<PrivateRouter element={AdminDashboard} role='admin' />} />
            <Route path='*' element={<Notfound />} />
          </Routes>
        </Layout>
      </BrowserRouter>


    </div>
  );
}

export default App;
