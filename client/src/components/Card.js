import React from 'react';
import {Link, useLocation} from 'react-router-dom';
import Btn from './Btn';

export default function Card(props) {
    const location = useLocation();
    const address = location.pathname;
    return(
        <div className="card" id={props.id}>
            <div className="card-header">
                <Link to={props.link}>
                    <h3>{props.title}</h3>
                </Link>
                <h4>by {props.authors}</h4>
            </div>
            <div className={props.description ? "card-body row" : "card-body"}>
                <img src={props.image} alt={`Cover of ${props.title}`}/>
                <p>{props.description}</p>
                <div id="buttons">
                    {address==="/" || address==="/books" ? 
                    (<><Btn name="save" action={props.save} id={props.id} />
                    <p className="hide">Book saved!</p></>)
                    : <Btn name="delete" action={props.delete} id={props.id} />}
                </div>
            </div>
        </div>
    );
}