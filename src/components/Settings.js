// External imports
import React from 'react';

class Settings extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.data;

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
        </div>
      </main>
    );
  }
}

export default Settings;
