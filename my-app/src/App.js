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
    const self = axios.get(gitHubApi);
    const followers = axios.get(followersApi);
    Promise.all([self, followers])

      .then(([selfRes, followersRes]) => {
        this.setState({ 
          user: [selfRes.data],
          follower: followersRes.data, 
        });
    });

  }

  render() {
    return (
      <div className='container'>
        <h1 className='intro'>My GitHub card</h1>
        <CardComponent card={this.state.user}/>
        <h3>Below are some of Sammy's followers</h3>
        <UserFollowers card={this.state.follower} />
      </div>
    );
  }
}
