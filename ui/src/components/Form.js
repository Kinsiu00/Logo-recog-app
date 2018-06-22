import React, {Component} from 'react';
import axios from 'axios';
import '../App.css';


class ImgForm extends Component {


    onSubmit = (e) => {
        e.preventDefault();
        const image = e.target.image.value
        axios.post('/vision', {image}).then(
            (result) => {
                console.log(result.data)
                this.props.setCompany(result.data)
            })
    }
    "bombs away"
    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <input type='text' name='image' required placeholder='place link here'/>
                <input type='submit' value='Submit'/>
            </form>
        )
    }
}

export default ImgForm;