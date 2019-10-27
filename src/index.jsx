import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import createSagaMiddleware from "redux-saga";
import { applyMiddleware, createStore } from "redux";
import "regenerator-runtime/runtime";

import reducers from "./reducers";
import rootSaga from "./saga";

import pages from "./pages";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducers, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={pages.MainPage}></Route>
          <Route path="/about" component={pages.AboutPage}></Route>
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

render(<App />, document.getElementById("root"));
