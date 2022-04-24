import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import ResetPage from './pages/ResetPage'
import ProfilePage from './pages/ProfilePage';
import EditProfilePage from './pages/EditProfilePage';
import ChangeEmailPage from './pages/ChangeEmailPage';
import ChangePassPage from './pages/ChangePassPage';
import ChangeAddrPage from './pages/ChangeAddrPage';
import AddAddrPage from './pages/AddAddrPage';
import MyCartPage from './pages/MyCartPage';
import HistoryPage from './pages/HistoryPage';

function App() {
  return (
    <div>
      <BrowserRouter>

      <Routes>
          <Route path='/' element={ <LoginPage/>} />
          <Route path='/register' element={ <RegisterPage/>} />
          <Route path='/reset' element={ <ResetPage/>} />
          <Route path='/profile' element={ <ProfilePage/>} />
          <Route path='/editprofile' element={ <EditProfilePage />} />
          <Route path='/changemail' element={ <ChangeEmailPage />} />
          <Route path='/changepass' element={ <ChangePassPage />} />
          <Route path='/changeaddr' element={ <ChangeAddrPage />} />
          <Route path='/addaddr' element={ <AddAddrPage />} />
          <Route path='/mycart' element={ <MyCartPage />} />
          <Route path='/history' element={ <HistoryPage />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
