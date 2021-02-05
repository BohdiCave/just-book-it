import React from 'react';
import {Link, useLocation} from 'react-router-dom';
import Btn from './Btn';

export default function Card(props) {
    const location = useLocation();
    const address = location.pathname;
    return(
        <div className="card" id={props.key}>
            <div className="card-header">
                <Link to={props.link}>
                    <h3>{props.title}</h3>
                </Link>
                <h4>by {props.authors}</h4>
            </div>
            <div className="card-body">
                <img src={props.imageURL} alt={`Cover of ${props.title}`}/>
                <p>{props.description}</p>
                <div id="buttons">
                    {address==="/books" ? 
                    <Btn name="save" action={props.save} {...props} />
                    : <Btn name="delete" action={props.delete} />}
                </div>
            </div>
        </div>
    );
}