import './App.css';
import {React, useEffect} from 'react'
import { loadObj, homeObj } from './components/pages/Data'
import Load from './components/pages/Load';
import Homepage from './components/pages/Homepage';
import {BrowserRouter as Router, Switch, Route, useHistory} from 'react-router-dom';
import { AnimatePresence } from 'framer-motion'
import createHistory from 'history/createBrowserHistory';

function App() {
  // let history = useHistory();
  // useEffect(()=>{
  //   setTimeout(()=> {
  //     history.push("/home")
  // },6000)
  // },[])
  
 

  return (
    <Router>
      <div className="App">
        <Route render={
          ({ location }) => (
          <AnimatePresence initial={false} exitBeforeEnter>
            <Switch location={location} key={location.pathname}>
              <Route path="/" exact render={() => <Load {...loadObj} />} />
              <Route path="/home" exact render={() => <Homepage {...homeObj} />} />
            </Switch>
          </AnimatePresence>
        )}
        />
      </div>
    </Router>
  );
}

export default App;
