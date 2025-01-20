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
import ShoePage from './pages/shoePage';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route
            path='/*'
            element={
              <Layout>
                <Routes>
                  <Route
                    path="/"
                    element={<PrivateRouter element={HomePage} role="user" />}
                  />                  {/* <Route path='/store' element={<PrivateRouter element={StorePage} role='user' />} /> */}
                  <Route path='/store' element={<PrivateRouter element={StorePage} role='user' />} />
                  <Route path='/contact' element={<ContactPage />} />
                  <Route path='/shoes' element={<ShoePage />} />
                  <Route path='/admin' element={<PrivateRouter element={AdminDashboard} role='admin' />} />
                  <Route path='*' element={<Notfound />} />
                </Routes>
              </Layout>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

