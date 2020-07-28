import * as React from 'react';
import { Location } from './Location';

export class App extends React.Component {
  render() {
    return (
      <div>
      <h1>{this.props.initialData.appName}</h1>
      This is a sample stateful and server-side rendered React application.
      <br />
      <br />
      <Location />
    </div>
    )
  }
}