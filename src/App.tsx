import * as React from 'react';
import './App.css';
import ComponentDidMount from './ComponentDidMount';

export interface IAppProps {
}

interface IState {
  shortMessage: ""
}

export default class App extends React.Component<IAppProps, IState> {
  shortMessage!: string;
  printMe!: () => void;
  constructor(props: IAppProps) {
    super(props);
    this.state = {
      shortMessage: ""
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>Welcome to React Lifecycle</p>
          <ComponentDidMount shortMessage={this.shortMessage} componentDidMount={() => this.componentDidMount} printMe={() => this.printMe}/>
        </header>
      
        

      </div>
    );
  }

}
