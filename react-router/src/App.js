import './App.css';
import { Routes, Route } from "react-router-dom"
import Home from './Components/Home/Home';
import Profile from './Components/Profile/Profile';
import NotFound from './Components/NotFound/NotFound';
import NavBar from './Components/Navbar/NavBar';
import Service from './Components/Services/Service';
import Contact from './Components/Contact/Contact';
import Developement from './Components/Services/Developement';
import CyberSecurity from './Components/Services/CyberSecurity';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/services' element={<Service />}>
          <Route path='/services/Developpement' element={<Developement />} />
          <Route path='/services/cybersecurite' element={<CyberSecurity />} />
        </Route>

        <Route path='/contact' element={<Contact />} />
        <Route path='/profile/:id' element={<Profile />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}
export default App;
