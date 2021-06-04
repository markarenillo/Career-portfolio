import './App.css';
import {React, useEffect} from 'react'
import { loadObj, homeObj, cloudsObj } from './components/pages/Data'
import Load from './components/pages/Load';
import Homepage from './components/pages/Homepage';
import {BrowserRouter as Router, Switch, Route, useHistory} from 'react-router-dom';
import { AnimatePresence } from 'framer-motion'
import createHistory from 'history/createBrowserHistory';

function App() {
  let history = useHistory();
  useEffect(()=>{
    setTimeout(()=> {
      history.push("/home")
  },6000)
  },[])
  
 

  return (
      <div className="App">
        <Route path="/" exact render={() => <Load {...loadObj} />} />
        <Route path="/home" exact render={() => <Homepage {...homeObj} />} />
      </div>
  );
}

export default App;
