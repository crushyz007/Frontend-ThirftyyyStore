import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import ResetPage from './pages/ResetPage'
import ProfilePage from './pages/ProfilePage';
import EditProfilePage from './pages/EditProfilePage';
import ChangeEmailPage from './pages/ChangeEmailPage';

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
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
