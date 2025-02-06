import { React } from 'react';
import "./card.css";

function Card(props) {

    return(
        <>
            <div className="card">
            <img className="img" src={props.i.Poster} alt="No img available" width="195"/>
            <p className="para">{props.i.Title}</p>
            <p className="year">{props.i.Year}</p>
            </div>

            <br/>
        </>
    )
}

export default Card;