import React, {Component} from 'react';
import '../App.css';

class Company extends Component {

    onClick = (e) => {
        e.preventDefault();
        const me = this.props.eachComp
        this.props.setCompany(me)
        }

            
    render() {
        const {name} = this.props.eachComp
    return (
            <h3 name='cEntry' onClick={this.onClick}>{name}</h3>
        )
    }
}

export default Company;