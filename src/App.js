import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';
import Header from './components/Header';
import SearchUser from './components/SearchUser';
import InfoCard from './components/InfoCard';
import About from './components/pages/About';
import './App.css';

class App extends React.Component{

  state = {
    userName: 'DeveloperRaj',
    name: '',
    avatarURL: '',
    profileURL: '',
    repos: 0,
    followers: 0,
    followings: 0
  }

  userNameMet = (username) => {
    this.setState({ userName: username });
  }

  getData = () => {
    let username = this.state.userName;
    axios.get(`https://api.github.com/users/${username}`)
      .then(res => this.setState({ 
        name: res.data.login,
        avatarURL: res.data.avatar_url,
        profileURL: res.data.html_url,
        repos: res.data.public_repos,
        followers: res.data.followers,
        followings: res.data.following
       }));
  }

  render(){
    this.getData();
    return (
        <Router>
        <div>
          <Header />
          <Route exact path={process.env.PUBLIC_URL + '/'} render={props => (
            <React.Fragment>
              <SearchUser userNameMet={this.userNameMet} submitMet={this.getData} />
              <InfoCard userName={this.state.userName} data={this.state} />
            </React.Fragment>
          )} />
          <Route path={process.env.PUBLIC_URL + '/about'} component={About} />
        </div>
      </Router>
    )
  }
}

export default App;
