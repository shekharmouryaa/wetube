import React from 'react'
import logo from './human.jpg'


const Card = (props) => {

    console.log(props.cardInfo);

    return (
        <div>
            <div class="card mt-2 ms-2" style={{ width: "18rem" }}>
                <img class="card-img-top" src={logo} alt="applogo" />
                <div class="card-body">
                    <h5 class="card-title">{props.cardInfo.title}</h5>
                    <p class="card-text">{props.cardInfo.description}</p>
                    <span href="#" class="btn btn-primary">{props.btnText}</span>
                </div>
            </div>
        </div>
    )

}

export default Card;

