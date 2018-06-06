import React, {Component} from 'react';

class Company extends Component {

    render() {
        const {name, description, products} = this.props.eachComp
    return (
        <div>
            <p>{name}</p>
            <p>{description}</p>
            <p>{products}</p>
        </div>
        )
    }
}

export default Company;