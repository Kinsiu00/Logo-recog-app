import React, {Component} from 'react';

class CurrentComp extends Component {
    render() {
        const {name, description, products} = this.props.currentCompany
        return (
            <div>
                <p>{name}</p>
                <p>{description}</p>
                <p>{products}</p>
            </div>
        )
    }
}

export default CurrentComp;