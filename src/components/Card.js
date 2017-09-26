import React from 'react';


class Card extends React.Component {
    render() {
        const { restaurant } = this.props;
        return (
            <div className="card">
                <img src={restaurant.uri} alt="dishes" className="img-card"/>
                <div className="note">
                    <h3>{restaurant.name}</h3>
                    <img className="star" src="./style/assets/star.png" alt="star"/>
                    <h5>{restaurant.stars}</h5>
                </div>
                <span className="likes">{restaurant.likes} likes</span>
            </div>
        )
    }
}


export default Card;
