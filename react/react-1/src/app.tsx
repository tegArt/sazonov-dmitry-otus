import * as React from 'react';

class App extends React.Component {
  constructor(props: any) {
    super(props);
  }

  render() {
    return <h1>ping - { this.props.test }</h1>;
  }
}

export default App;
