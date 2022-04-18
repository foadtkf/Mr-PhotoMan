
import './App.css';
import Header from './components/Header/Header';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About'
import 'bootstrap/dist/css/bootstrap.min.css';
import Services from './components/Services/Services';
import Blog from './components/Blog/Blog';
import Checkout from './components/Checkout/Checkout';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Footer from './components/Footer/Footer';
import RequireAuth from './components/RequireAuth/RequireAuth'

function App() {
  return (
    <div className="App">
    <Header></Header>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/about' element={<About></About>}></Route>
      <Route path='/services' element={<Services></Services>}></Route>
      <Route path='/blog' element={<Blog></Blog>}></Route>
      <Route path='/checkout' element={<RequireAuth>
        <Checkout></Checkout>
      </RequireAuth>}></Route>
      <Route path='/login' element={<Login></Login>}></Route>
      <Route path='/signup' element={<Signup></Signup>}></Route>
      <Route path='/home' element={<Home></Home>}></Route>

    </Routes>
    <Footer></Footer>
    </div>
  );
}

export default App;
