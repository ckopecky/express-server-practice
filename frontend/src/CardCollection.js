import React from 'react';
import Card from './Card.js';

const CardCollection = (props) => {
    return (
        <ul>
            {props.chars.map((char, index)=> {
                console.log(char, index)
                return(
                    <Card index={index} char={char}/>
                )
            })}
        </ul>
    );
};

export default CardCollection;