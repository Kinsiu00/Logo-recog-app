import React, {Component} from 'react';
import EditForm from './EditForm'
import '../App.css'

class CurrentComp extends Component {
    render() {
        const {name, description, products, image} = this.props.currentCompany
        return (
            <div>
                <img src={image}></img>
                <h1>{name}</h1>
                <h2>{products}</h2>
                <h3>{description}</h3>
            </div>
        )
    }
}

export default CurrentComp;