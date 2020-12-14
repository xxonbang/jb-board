import './App.css';
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Humor from './pages/board/Humor';
import Society from './pages/board/Society';
import PostView from './pages/post-view/post-view';

function App() {
  return (
    <div className='app'>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route exact path='/board/humor' component={Humor} />
          <Route exact path={'/board/humor/:no'} component={PostView} />
          <Route path='/board/society' component={Society} />
          {/*<Route path='/view' component={PostView} />*/}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
