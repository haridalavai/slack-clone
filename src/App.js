import React, { useState } from "react";
import "./App.css";
import Header from "./header/Header";
import Sidebar from "./Sidebar/Sidebar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Chat from "./chat/Chat";
import Login from "./Login/Login";
import { useStateValue } from "./StateProvider";

function App() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="app">
      <Router>
        {user ? (
          <>
            <Header />
            <div className="app__body">
              <Sidebar />
              <Switch>
                <Route path="/room/:roomId">
                  <Chat />
                </Route>
                <Route path="/">
                  <h1>welcome</h1>
                </Route>
              </Switch>
            </div>
          </>
        ) : (
          <Login />
        )}
      </Router>
    </div>
  );
}

export default App;
