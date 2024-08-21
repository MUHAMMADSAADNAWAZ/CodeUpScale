import { BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import ServicesNav from './Components/ServicesNav/ServicesNav';
import Talent from './Components/Talent/Talent';
import Portfolio from './Components/Portfolio/Portfolio';
import Careers from './Components/Careers/Careers';

function App() {

  return (
    <>
    <BrowserRouter >
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/services' element={<ServicesNav />} />
      <Route path='/talent' element={<Talent />} />
      <Route path='/portfolio' element={<Portfolio />} />
      <Route path='/careers' element={<Careers />} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
