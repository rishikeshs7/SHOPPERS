
import './App.css';
import { BrowserRouter,  Routes,Route  } from 'react-router-dom';
import Shop from './Shop';
import Mens from './Mens';
import Womens from './Womens';
import Kids from './Kids';
import Navbar from './Navbar';
import Footer from './Footer';
import Loginsignup from './Loginsignup';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>

        <Route path='/' element = {<Shop/>}/>
        <Route path='/Mens' element = {<Mens/>}/>
        <Route path='/Womens' element = {<Womens/>}/>
        <Route path='/Kids' element = {<Kids/>}/>
        <Route path='/Loginsignup' element = {<Loginsignup/>}/>
        

    </Routes>
    <Footer/>
    </BrowserRouter>

    
  );
}

export default App;
