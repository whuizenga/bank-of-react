import React, { Component } from 'react';

class TransactionForm extends Component {
    constructor () {
     super();
 
     this.state = {
       newTransaction: {}
     }
   }

  _handleNewTransactionChange = (event) => {
     const attributeName = event.target.name;
     const attributeValue = event.target.value;
 
     const newTransaction = {...this.state.newTransaction};
     newTransaction[attributeName] = attributeValue;
 
     this.setState({newTransaction})
   };

    render() {
        return (
            <div>
                <form>
                    <div><input type="text" placeholder="description" name="description" onChange={this._handleNewTransactionChange}/></div>
                    <div><input type="number" min="0.00" step="0.01" placeholder="amount" name="amount" onChange={this._handleNewTransactionChange}/></div>
                    <div><button type="submit">add transaction</button></div>
                </form>
            </div>
        );
    }
}

export default TransactionForm;