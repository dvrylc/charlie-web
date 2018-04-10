// External imports
import React from 'react';
import { Route } from 'react-router-dom';

// Internal imports
import api from '../utilities/api';
import Header from './Header';
import Scanner from './Scanner';
import Settings from './Settings';

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      loading: true,
      data: {}
    }

    this.handleUpdate = this.handleUpdate.bind(this);
  }

  componentDidMount() {
    api.fetch()
      .then(r => {
        this.setState({
          loading: false,
          data: r.data
        });
      })
      .catch(err => {
        console.error(err);
      });
  }

  handleUpdate(newState) {
    api.update(newState)
      .then(r => {
        this.setState({
          data: r.data.data
        });
      })
      .catch(err => {
        console.error(err);
      });
  }

  render() {
    if (this.state.loading) {
      return <h1>loading</h1>;
    }

    return (
      <div className="app">
        <Header />

        <Route exact path='/' render={ () =>
          <Settings
            data={ this.state.data }
            handleUpdate={ this.handleUpdate }
          />
        } />

        <Route exact path='/scanner' render={ () =>
          <Scanner
            data={ this.state.data }
            handleUpdate={ this.handleUpdate }
          />
        } />
      </div>
    );
  }
}

export default App;
