import React, {Component} from 'react';

class Company extends Component {

    render() {
        const {name} = this.props.eachComp
    return (
            <p>{name}</p>
        )
    }
}

export default Company;