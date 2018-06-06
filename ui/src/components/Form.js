import React, {Component} from 'react';
import axios from 'axios';

class ImgForm extends Component {


    onSubmit = (e) => {
        e.preventDefault();
        console.log(e.target.image.value)
        const image = e.target.image.value
        // axios.post('vision').then(console.log('hello me'))
        axios.post('/vision', {image}).then(console.log("hi mom"))
    }

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