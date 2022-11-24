import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Copyright from './components/Copyright';
import Admission from './pages/Admission';
import Academic from './pages/Academic';
import Achievement from './pages/Achievement';
import Infrastructure from './pages/Infrastructure';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
function App() {
  return (
    <div >
        <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about'  element={<About/>}/>
          <Route path='/admission'  element={<Admission/>}/>
          <Route path='/academic'  element={<Academic/>}/>
          <Route path='/achievement'  element={<Achievement/>}/>
          <Route path='/Infrastructure'  element={<Infrastructure/>}/>
          <Route path='/Gallery'  element={<Gallery/>}/>
          <Route path='/contact'  element={<Contact/>}/>






          </Routes>
          <Footer/>
          <Copyright/>
        </BrowserRouter>
    </div>
  );
}

export default App;
