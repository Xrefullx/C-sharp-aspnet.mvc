import logo from './logo.svg';
import './App.css';
import {Tools} from './pages/Tools';
import {BrowserRouter, Route, Switch,NavLink} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="App container">
      <h3 className="d-flex justify-content-center m-3">
      Тестовое задание
      </h3>
        
      <nav className="navbar navbar-expand-sm bg-light navbar-dark">
        <ul className="navbar-nav">
          <li className="nav-item- m-1">
            <NavLink className="btn btn-light btn-outline-primary" to="/Tools">
              Тестовое задание
            </NavLink>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path='/Tools' component={Tools}/>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
