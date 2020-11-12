import React from "react";
import { Provider } from "react-redux";
import configureStore from "./Store/configureStore";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Cart from "./Pages/Cart/Cart";
import Order from "./Pages/Order/Order";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

class Routes extends React.Component {
  render() {
    const store = configureStore();
    return (
      <Provider store={store}>
        <Router history={history}>
          <Switch>
            <Route exact path="/" component={Cart} />
            <Route exact path="/order" component={Order} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default Routes;
