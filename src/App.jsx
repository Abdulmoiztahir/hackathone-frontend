import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import Login from './pages/login'
import Register from './pages/register'
import Dashboard from './pages/dashboard'
import Profile from './pages/profile'

function App() {

  return (
    <BrowserRouter>
      <Routes>

          <Route index element={<Login />} />
          <Route path='/register' element={<Register />} />
        <Route path='/' element={<Dashboard />}> 

          <Route path='/profile' element={<Profile />} />

        </Route>


      </Routes>
    </BrowserRouter>
  )
}

export default App
