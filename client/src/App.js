import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// Redux
import { Provider } from 'react-redux'
import store from './store'

// Components
import List from './components/List'
import PhoneDetails from './components/PhoneDetails'


function App() {

  return (
    <Router>

      <Provider store={store}>

        <Switch>
          <Route exact path='/' component={List} />
          <Route exact path='/:id' component={PhoneDetails} />
        </Switch>

      </Provider>
    </Router>

  );
}

export default App;
