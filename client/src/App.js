import React, { Component } from "react";
import axios from "axios";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    debugger;
  }

  render() {
    if (!this.state.currentUser) {
      return (
        <form onSubmit={this.handleSubmit}>
          <input name="Email" type="email" placeholder="Email..." />
          <input name="Password" type="password" placeholder="Password..." />
          <button>login</button>
        </form>
      );
    } else {
      return this.state.currentUser;
    }
  }
}

export default App;
