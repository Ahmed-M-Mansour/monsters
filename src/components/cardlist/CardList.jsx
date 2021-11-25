import React, { Component }  from 'react';
import './card-list.css'
import {Card} from '../card/Card'
const Cardlist = props => {
  
    return (
        <div className="card-list">
            {
            props.monesters.map(monester => (
                <Card key={monester.id}  monester={monester} />
            ))
            }
        </div>
        )
}; 
export default Cardlist; 