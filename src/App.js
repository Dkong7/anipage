import React, {useState} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Home from './pages';
import Footer from './components/Footer';

function App() {

  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
      setIsOpen(!isOpen)
  }

  return (
    <Router>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} /> 
      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/anipage" component={Home} exact/>
        <Route path="*" elemement={<navigate to="/"/>}/>
      </Switch>
      <Footer/>

    </Router>
  );
}

export default App;
