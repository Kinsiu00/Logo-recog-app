import React, { Component } from 'react';
import './App.css';
import Company from './components/Company';
import ImgForm from './components/Form';
class App extends Component {

  state = {
    companies: []
  }

  componentWillMount = async () => {
    const response = await fetch('/companies')
    const json = await response.json()
      this.setState({companies: json.companies})
  }

  render() {
    const companyList = this.state.companies
    
    return (
      <div className="App">
        <h1>I am cheese.</h1>
        <ImgForm />
        {
          companyList.map( eachComp => {
            return <Company key={eachComp.id} eachComp={eachComp} />
          })
        }
      </div>
    );
  }
}

export default App;
