import React from 'react';
import axios from 'axios'
import UserCard from './components/UserCard';
import FollowerCard from './components/FollowerCard';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [],
      usersFollowers: []
    };
  };

  componentDidMount() {
    axios
      .get('https://api.github.com/users/danielkyman')
      .then(res => {
        this.setState({
          users: res.data
        })
      })
      .catch(err => console.log('user - ', err));

    axios
      .get('https://api.github.com/users/danielkyman/followers')
      .then(res => {
        this.setState({
          usersFollowers: res.data
        })
      })
      .catch(err => console.log('user followers - ', err));
  }

  render() {
    return (
      <div className="App">
        <h1>Hello</h1>
        <UserCard data={this.state.users} />
        <div className="followers">
          {this.state.usersFollowers.map(data => (
            <FollowerCard data={data} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
