import React from 'react';
import axios from 'axios';
import './App.css'
import CardComponent from './CardComponent/CardComponent';
import UserFollowers from './CardComponent/UserFollowers';

const gitHubApi = 'https://api.github.com/users/Martins-O-U';
const followersApi = 'https://api.github.com/users/osammy/followers';


export default class Todos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: [],
      follower: [],
    };
  }

  componentDidMount() {
    const me = axios.get(gitHubApi);
    const others = axios.get(followersApi);
    Promise.all([me, others])

      .then(([meRes, othersRes]) => {
        this.setState({ 
          user: [meRes.data],
          follower: othersRes.data, 
        });
    });

  }

  render() {
    return (
      <div className='container'>
        <CardComponent card={this.state.user}/>
        <UserFollowers card={this.state.follower} />
      </div>
    );
  }
}
