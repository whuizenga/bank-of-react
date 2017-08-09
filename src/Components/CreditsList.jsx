import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import TransactionComponent from './TransactionComponent';
import TransactionForm from './TransactionForm';
import AccountBalance from './AccountBalance';

class DebitsList extends Component {
    render() {
        const credits = this.props.credits;

        const creditsComponents = credits.map((transaction, index) => {
            return <TransactionComponent
                key={index}
                date={transaction.date}
                amount={transaction.amount}
                description={transaction.description} />
        })

        return (
            <div>
                <Link to="/">Home</Link>
                <h1>Credits</h1>
                <TransactionForm/>
                <AccountBalance accountBalance={this.props.accountBalance}/>
                {creditsComponents}
            </div>
        );
    }
}

export default DebitsList;