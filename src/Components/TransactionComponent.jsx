import React, { Component } from 'react';
import styled from 'styled-components';

const TransactionDiv = styled.div`
    background-color: grey;
    
`

class TransactionComponent extends Component {
    render() {
        return (
            <div>
                <p>Date: {this.props.date}</p>
                <p>Amount: {this.props.amount}</p>
                <p>Description: {this.props.description}</p>
            </div>
        );
    }
}

export default TransactionComponent;