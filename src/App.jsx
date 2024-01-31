import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Welcome } from './pages/welcome';
import ProtectedRoutes from './components/ProtectedRoutes';
import Login from './pages/Login';
import DashBoard from './pages/DashBoard';
import Registers from './pages/Registers';
import Activity from './pages/Activity';
import { NewUser } from './pages/NewUser';

function App() {
   
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Welcome/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/registro' element={<Registers/>}/>
          <Route path='/activity' element={<Activity/>}/>
          <Route path='/newactivity' element={<NewUser/>}/>
          <Route element={<ProtectedRoutes/>}>
            <Route path='/dashboard' element={<DashBoard/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
