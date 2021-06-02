import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navigation />
        <div className="app-class-content">
          <Route path="/profile" component={Profile} />
          <Route path="/messages" component={Dialogs} />
          <Route path="/news" component={News} />
          <Route path="/settings" component={Settings} />
          <Route path="/music" component={Music} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
