import React from "react";
import { Provider } from "react-redux";
import configureStore from "./Store/configureStore";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Cart from "./Pages/Cart/Cart";
import Order from "./Pages/Order/Order";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

class Routes extends React.Component {
  render() {
    const store = configureStore();
    const persistor = persistStore(store);

    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Router history={history}>
            <Switch>
              <Route exact path="/" component={Cart} />
              <Route exact path="/order" component={Order} />
            </Switch>
          </Router>
        </PersistGate>
      </Provider>
    );
  }
}

export default Routes;
