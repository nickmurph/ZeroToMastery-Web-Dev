import React from 'react';
import Card from './Card'


const CardList = ({robots}) => {
    // uncomment this code to cause an error and trigger the Error Boundary component that CardList is a child to
    // if (true){
    //     throw new Error("testing Error Boundary")
    // }

    
    return (
        <div>
        {
             robots.map((user,i) => {
                return (
                    <Card 
                    key={i} 
                    id={robots[i].id} 
                    name ={robots[i].name} 
                    email={robots[i].email}
                    />
                );
            })
        } 
        </div>
    )
}


export default CardList;