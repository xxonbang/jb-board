import './App.css';
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Humor from './pages/board/Humor';
import Society from './pages/board/Society';
import PostView from './pages/template/post-view-template/post-view';
import Signup from './pages/signup/Signup';
import WritePost from './pages/template/write-post-template/write-post';

function App() {
  return (
    <div className='app'>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/signup' component={Signup} />
          <Route exact path='/board/humor' component={Humor} />
          <Route exact path={'/board/humor/:postNo'} component={PostView} />
          <Route exact path='/board/society' component={Society} />
          <Route exact path='/write' component={WritePost} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
