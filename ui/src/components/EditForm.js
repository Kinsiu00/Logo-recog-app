import React, {Component} from 'react';
import '../App.css';
import axios from 'axios'


class EditForm extends Component {

    onSubmit = (e) => {
        e.preventDefault()
        const {name, product, image, description} = this.props.currentCompany
        axios.post('/companies', {name, product, image, description})
            .then((result) => {
                this.props.refreshList(result.data)
            })
    }

    render() {
        const {name, product, image, description} = this.props.currentCompany
        return (
            <form onSubmit={this.onSubmit}>
                <input type='text' placeholder='Company Name' value={name}></input>
                <input type='text' placeholder='Products' value={product}></input>
                <br/>
                <input type='url' placeholder='http://linktopicture.com/picture.jpg' value={image}></input>
                <br/>
                <textarea rows='10' col='50' placeholder='Please provide a description' value={description}></textarea>
                <input type='submit' value='submit'/>
                <input type='submit' value='reset'/>
            </form>
        )
    }
}

export default EditForm;