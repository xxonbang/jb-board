import './App.css';
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Humor from './pages/board/Humor';
import Society from './pages/board/Society';

function App() {
  return (
    <div className='app'>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/board/humor' component={Humor} />
          <Route path='/board/society' component={Society} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
