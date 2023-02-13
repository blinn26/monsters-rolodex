import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [
        {
          name: 'Goblin',
          id: '12e1msse',
        },
        {
          name: 'Skeleton',
          id: '1345123e',
        },
        {
          name: 'Zombie',
          id: '12pld3e',
        },
        {
          name: 'Ben',
          id: '12ek323e',
        },
      ],
    };
  }

  render() {
    return (
      <div className='App'>
        {this.state.monsters.map((monster) => {
          return (
            <div key={monster.id}>
              <h1>{monster.name}</h1>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
