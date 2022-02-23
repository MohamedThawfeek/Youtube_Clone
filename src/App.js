import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import appReducer from "./components/Redux/Reducer/User";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";

const App = () => {
  const store = createStore(appReducer);

  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
