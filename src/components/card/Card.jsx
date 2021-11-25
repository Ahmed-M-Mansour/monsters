import React from 'react'
import './card.css'
 export const Card = props => {
      return (
           <div className="card-container">
                 <img
                     src={`https://robohash.org/${props.monester.id}?set=set2&size=180x180`}
                     alt=" Monster "
                />
                <h2> {props.monester.name}</h2>
                <p> {props.monester.email} </p>
                <p className='phone'> {props.monester.phone } </p>
                
               
          </div>
       )
}
