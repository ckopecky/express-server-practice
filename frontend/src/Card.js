import React from 'react';

const Card = (props) => {
    return (
        <li key={props.char._id} id="hp-card">
                <img id="hp-card-pic"src={props.char.pic} alt={props.char.firstName + props.char.lastName + props.index}/>
                <div key={props.char.firstName + props.char.lastName}>
                    <h1>{props.char.firstName} {props.char.lastName}</h1>
                    <p>{props.char.email}</p>
                    <h3>{props.char.bio}</h3>
                </div>
              </li>
    );
};

export default Card;