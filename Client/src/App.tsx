import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import PrivateRoute from './PrivateRoute';
import { Home, LoginPage, SignPage } from './pages';



// Higher-order component to wrap each route element with ErrorBoundary

function App() {
  
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/sign' element={<SignPage/>}/>
          <Route  element={<PrivateRoute/>}>
            
            <Route path='/' element={<Home/>}/>
            
          </Route>
        </Routes>
      </BrowserRouter>
     
     
    </>
  )
}

export default App
