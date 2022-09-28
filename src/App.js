import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import UserRegistration from './components/UserRegistration'
import SignIn from './components/SignIn'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavbarWeb from './components/NavbarWeb'
import FooterWeb from './components/FooterWeb'
import Home from './components/Home'

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <div>
          <NavbarWeb />
          <Routes>
            <Route path='/' exact element={<Home />} />
            <Route path='/UserRegistration' exact element={<UserRegistration />} />
            <Route path='/SignIn' exact element={<SignIn />} />
          </Routes>
          <FooterWeb />
        </div>
      </BrowserRouter>

    </div>
  );
}

export default App;
