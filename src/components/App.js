import * as React from 'react';

export class App extends React.Component {
  render() {
    return (
      <div>
      <h1>{this.props.initialData.appName}</h1>
      This is a sample stateful and server-side rendered React application.
      <br />
      <br />
    </div>
    )
  }
}