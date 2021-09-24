import React from 'react'


import "./Services.css"


function ServicesCard(props) {
    return (
        <>
        <li className="servicecards__item">
        <div className="card__info">
                <h2>{props.plan}</h2>
                <ul>
                 <div>
                <h3>&nbsp;{props.text}</h3> 
                </div>
                <div>
                <h4><i className="fas fa-rupee-sign"></i>{props.price} &nbsp;&nbsp;<i className="far fa-clock"></i>{props.time} &nbsp;&nbsp; <i className="fas fa-history"></i>{props.revision}</h4>
                </div>
                
                <div>
                    <ul><i className="fas fa-check"></i>{props.l1}</ul>
                    <ul><i className="fas fa-check"></i>{props.l2}</ul>
                    <ul><i className="fas fa-check"></i>{props.l3}</ul>
                    <ul><i className="fas fa-check"></i>{props.l4}</ul>
                    <ul><i className="fas fa-check"></i>{props.l5}</ul>
                </div>
                </ul>
            </div>
             <button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                Continue for <i className="fas fa-rupee-sign"></i>{props.price}
             </button>
        </li>
        </>
    )
}

export default ServicesCard
