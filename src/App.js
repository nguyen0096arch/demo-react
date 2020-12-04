import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './pages/Home';
import DemoContext from './pages/DemoContext';

function App() {
  return (
    <div className="App">
      <Router>
        <ul>
          <Link to="/"><li>Home</li></Link>
          <Link to="/react"><li>Context</li></Link>
        </ul>
        <Switch>
          <Route path="/react" component={DemoContext} />
          <Route component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
