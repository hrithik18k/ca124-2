import React from "react";

const TestimonialCard = ({review,name}) => {
    return(
        <div className="testimonialCard">
            <p className="review">{review}</p>
            <h3 className="coustumer-name">{name}</h3>
        </div>
    );
}

export default TestimonialCard;