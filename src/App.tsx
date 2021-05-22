import React from 'react';
import { Navbar } from './components/navbar';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import { Todos } from './pages/Todos';
import { About } from './pages/About';


const App:React.FC = () => {

  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Switch>
          <Route path='/' exact component={Todos}/>
          <Route path='/about' component={About}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
