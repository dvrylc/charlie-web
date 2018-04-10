// External imports
import React from 'react';
import { Link } from 'react-router-dom';

class Settings extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.data;

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.resetBooks = this.resetBooks.bind(this);
  }

  handleInput(e) {
    const name = e.target.id;
    const value = e.target.value;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.handleUpdate(this.state);
    alert('Successfully saved!');
  }

  resetBooks() {
    let newState = this.state;

    newState.books.forEach((_, i) => {
      newState.books[i].isActivated = false
    });

    this.props.handleUpdate(newState);
    alert('Successfully reset!');
  }

  render() {
    const bookRows = this.state.books.map(book => {
      if (book.isActivated) {
        return (
          <tr key={ book.id }>
            <td><img src={ `/images/${book.id}.jpg` } /></td>
            <td>{ book.title }</td>
          </tr>
        );
      } else {
        return (
          <tr className="bookNotActivated" key={ book.id }>
            <td><img src={ `/images/${book.id}.jpg` } /></td>
            <td>{ book.title }</td>
          </tr>
        );
      }
    });

    return (
      <main className="settings">
        <h2>SETTINGS</h2>

        <div>
          <h3>BASIC INFO</h3>

          <form onSubmit={ this.handleSubmit }>
            <table>
              <tbody>
                <tr>
                  <td><label htmlFor="name">Name</label></td>
                  <td>
                    <input
                      id="name"
                      type="text"
                      value={ this.state.name }
                      onChange={ this.handleInput }
                    />
                  </td>
                </tr>
              </tbody>
            </table>

            <input type="submit" value="Save" />
          </form>
        </div>

        <div>
          <h3>BOOKS</h3>

          <table>
            <tbody>
              { bookRows }
            </tbody>
          </table>

          <button onClick={ this.resetBooks }>Reset books</button>

          <Link to={{ pathname: "/scanner" }}>
            <button type="button">Scan a new book</button>
          </Link>
        </div>
      </main>
    );
  }
}

export default Settings;
