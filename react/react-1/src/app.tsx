import * as React from 'react';

interface IProps {
  test: string,
}

interface IState {
}

class App extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
  }

  render() {
    return <h1>ping - { this.props.test }</h1>;
  }
}

export default App;
