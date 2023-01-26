import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Consulting from './components/pages/Consulting';
import Home from './components/pages/Home';
import Service from './components/pages/Service';
import ContactUs from './components/pages/ContactUs';
import Product from './components/pages/Product';
import Marketing from './components/pages/Marketing';
import SignUp from './components/pages/SignUp';



function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Switch>
          <Route path='/home' exact component={Home}/>
          <Route path='/service' exact component={Service}/>
          <Route path='/consulting' exact component={Consulting}/>
          <Route path='/contactus' exact component={ContactUs}/>
          <Route path='/product' exact component={Product}/>
          <Route path='/marketing' exact component={Marketing}/>
          <Route path='/signup' exact component={SignUp}/>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
