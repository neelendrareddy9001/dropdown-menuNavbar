import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar'



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
