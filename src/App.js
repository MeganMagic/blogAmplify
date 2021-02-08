import { HashRouter, Switch, Route} from 'react-router-dom';

import Home from './routes/Home';
import Blog from './routes/Blog';
import Error from './routes/Error';

const App = () => {
  return (
    <HashRouter>
        <Switch>
            <Route path="/blog" exact><Blog /></Route>
            <Route path="/" exact><Home /></Route>
            <Route><Error /></Route>
        </Switch>
    </HashRouter>
  );
}

export default App;
