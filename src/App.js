import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Launches from "./views/Launches";
import Launch from "./views/Launch";
import "./App.css";
import logo from "./spacex-logo.jpg";

const client = new ApolloClient({
  uri: "https://spacex-api-gql.herokuapp.com/graphql",
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="container">
          <img
            src={logo}
            alt="SpaceX"
            style={{ width: 350, display: "block", margin: "auto" }}
          />
          <Route path="/" component={Launches} />
          <Route path="/launch/:flight_number" component={Launch} />
        </div>
      </Router>
    </ApolloProvider>
  );
};

export default App;
