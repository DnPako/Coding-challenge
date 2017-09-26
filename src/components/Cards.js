import React from 'react';
import Card from './Card';
import { connect } from 'react-redux';
import * as actions from '../actions';


class Cards extends React.Component {
    componentWillMount() {
        this.props.displayData();
    }


    render() {
        const { restaurants } = this.props;
        console.log(restaurants);
        return (
            <div className="cards">
                {restaurants.map((restaurant, index) => <Card key={index} restaurant={restaurant}/>)}
            </div>
        )
    }
}

function mapStateToProps({ restaurants }) {
    return { restaurants };
}

export default connect(mapStateToProps, actions)(Cards);
