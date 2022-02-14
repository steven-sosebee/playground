import logo from "./logo.svg";
import "./App.css";
import {
  ThemeContext,
  ThemeProvider,
  useThemeContext,
} from "./providers/theme/provider_theme";

import { Sidebar } from "./components/sidebar/sidebar";
import { Footer } from "./components/footer/footer";
import { Headers } from "./components/header/header";
import { Toggle } from "./components/toggle/toggle";
import { Logo } from "./components/logo/logo";
import { Portfolio } from "./components/portfolio/portfolio";
import { Article } from "./components/article/article";
import { Background } from "./components/background/background";
import { JSLogo } from "./components/emblems/javascript/emblem_javascript";
import "./styles/variables.css";
import React, { useState, useContext } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
} from "react-router-dom";
import ApolloRouter from "@apollo/client";

function App() {
  const theme = useContext(ThemeContext);
  console.log(useContext(ThemeContext));
  console.log(ThemeContext);
  console.log(ThemeProvider);
  return (
    <div>
      <ThemeProvider>
        <div className="main">
          <Sidebar />
          <Headers />
          <Background />
          {/* <JSLogo /> */}
          {/* <Toggle /> */}

          <Portfolio />
          <Footer />
        </div>
      </ThemeProvider>
    </div>
  );
  // return (
  //   <div>
  //     <Router>
  //       <div className="main">
  //         <Sidebar />
  //         <Headers />
  //         <Routes>
  //           <Route path="/" element={<Portfolio />} />
  //         </Routes>
  //         {/* <Article /> */}
  //         <Footer />
  //       </div>
  //     </Router>
  //   </div>
  // );
}

export default App;
