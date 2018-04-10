// External imports
import React from 'react';
import QrReader from 'react-qr-reader';

class Scanner extends React.Component {
  constructor() {
    super();

    this.handleScan = this.handleScan.bind(this);
  }

  handleScan(data) {
    if (data) {
      const key = Buffer.from(data, 'base64').toString('ascii');

      if (key.startsWith('charlie-activate-')) {
        const id = key.split('charlie-activate-')[1];

        let newState = this.props.data;
        newState.books[id].isActivated = true;
        this.props.handleUpdate(newState);

        alert(`Sucessfully activated book ${id}!`);
        setTimeout(() => {
          window.location.href = '/';
        }, 1000);
      }
    }
  }

  handleError(err) {
    console.error(err);
  }

  render() {
    return (
      <main className="scan">
        <h2>SCAN A NEW BOOK</h2>

        <QrReader
          onError={this.handleError}
          onScan={this.handleScan}
          style={{ width: '100%' }}
        />
      </main>
    );
  }
}

export default Scanner;
