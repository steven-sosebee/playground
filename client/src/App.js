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
import { Cookbook } from "./pages/cookbook/cookbook";
import { JSLogo } from "./components/emblems/javascript/emblem_javascript";
import "./styles/variables.css";
import React, { useState, useContext } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
  BrowserRouter,
} from "react-router-dom";
import { setContext } from "@apollo/client/link/context";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  const theme = useContext(ThemeContext);
  // console.log(useContext(ThemeContext));
  // console.log(ThemeContext);
  // console.log(ThemeProvider);
  return (
    <div>
      <ApolloProvider client={client}>
        <Router>
          <ThemeProvider>
            <div className="main">
              <Sidebar />
              <Headers />
              <Background />
              {/* <JSLogo /> */}
              {/* <Toggle /> */}

              <Cookbook />
              <Footer />
            </div>
          </ThemeProvider>
        </Router>
      </ApolloProvider>
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
