import React, { Component } from 'react';
import './App.css';
import Company from './components/Company';
import ImgForm from './components/Form';
import CurrentComp from './components/CurrentCompany'
class App extends Component {

  state = {
    companies: [],
    currentCompany: {
      name: '',
      description:'',
      products:''}
  }

  setCompany = (apiValue) => {
    const {name, description, products} = apiValue;
    this.setState({currentCompany: {name, description, products}})
    console.log(this.state.currentCompany)
  }

  componentWillMount = async () => {
    const response = await fetch('/companies')
    const json = await response.json()
      this.setState({companies: json.companies, currentCompany: {name:'name', description:'description', products:'products'}})
  }

  render() {
    const companyList = this.state.companies
    
    return (
      <div className="App">
        <h1>I am cheese.</h1>
        <ImgForm setCompany={this.setCompany}/>
        <CurrentComp currentCompany={this.state.currentCompany}/>
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
