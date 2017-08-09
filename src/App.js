import React, { Component } from 'react';
import axios from 'axios';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Home from './Components/Home'
import UserProfile from './Components/UserProfile'
import DebitsList from './Components/DebitsList'
import CreditsList from './Components/CreditsList'

class App extends Component {
  constructor() {
    super();

    this.state = {
      // accountBalance: 14568.27,
      accountBalance: 0,
      currentUser: {
        userName: 'whuizenga',
        memberSince: 2001,
      },
      debits: [],
      credits: [],
    }
  }

  componentWillMount() {
    this._getCredits();
    this._getDebits();
  }

  _getCredits = () => {
    axios.get('/credits')
      .then((res) => {
        console.log("got credits");
        this.setState({credits: res.data});
        // const credits = res.data.reduce((balance, data) =>{
        //   console.log(data.amount);
        //   return balance + data.amount;
        // }, 0);
        // const newBalance = this.state.accountBalance + credits;
        // this.setState({accountBalance: newBalance});
      })
      .catch((err) => {
        console.log(err);
      });
      
  }

  _getDebits = () => {
    axios.get('/debits')
      .then((res) => {
        console.log("got debits");
        this.setState({debits: res.data});
        // const credits = res.data.reduce((balance, data) =>{
        //   console.log(data.amount);
        //   return balance - data.amount;
        // }, 0);
        // const newBalance = this.state.accountBalance + credits;
        // this.setState({accountBalance: newBalance});
      })
      .catch((err) => {
        console.log(err);
      });
  }

  _calculateBalance = () => {
    const credits = this.state.credits.reduce((balance, data) =>{
          return balance + data.amount;
        }, 0);
        const debits = this.state.debits.reduce((balance, data) =>{
          return balance - data.amount;
        }, 0);
        return credits + debits;
  }
  render() {

    const calculateBalance = this._calculateBalance();
    const HomeComponent = () => (<Home accountBalance={calculateBalance}/>);
    const UserComponent = () => (<UserProfile
                                    userName={this.state.currentUser.userName}
                                    memberSince={this.state.currentUser.memberSince}
                                    />);

    const DebitsListComponent = () => (<DebitsList 
                                    accountBalance={calculateBalance}
                                    debits={this.state.debits}
                                    />);

    const CreditsListComponent = () => (<CreditsList 
                                    accountBalance={calculateBalance}
                                    credits={this.state.credits}
                                    />);

    return (
      <Router>
        <div>
          <Route exact path="/" render={HomeComponent} />
          <Route exact path="/userProfile" render={UserComponent} />
          <Route exact path="/debits" render={DebitsListComponent} />
          <Route exact path="/credits" render={CreditsListComponent} />
        </div>
      </Router>
    );
  }
}

export default App;
