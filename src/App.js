import './App.css';
import { BrowserRouter,Routes as Router,Route } from 'react-router-dom';
import Home from './pages/Home'
import Navigation from './component/Navigation'
import Service from './pages/Service';
import Price from './pages/Price';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Contact from './pages/Contact'
import News from './pages/News'
function App() {
  return (
      <BrowserRouter>
           <Router>
               <Route path="/" element={<Navigation/>}>
                     <Route index  element={<Home/>}/>
                     <Route path="service"  element={<Service/>}/>
                     <Route path="price"  element={<Price/>}/>
                     <Route path="news"  element={<News/>}/>
                     <Route path="signin"  element={<Signin/>}/>
                     <Route path="signup"  element={<Signup/>}/>
                     <Route path="contact"  element={<Contact/>}/>
               </Route>
           </Router>
      </BrowserRouter>
  );
}

export default App;
