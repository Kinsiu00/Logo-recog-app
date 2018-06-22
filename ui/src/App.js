import React, { Component } from 'react';
import './App.css';
import Company from './components/Company';
import ImgForm from './components/Form';
import CurrentComp from './components/CurrentComp'
import EditForm from './components/EditForm'
class App extends Component {

  state = {
    companies: [],
    currentCompany: {
      name: '',
      description:'',
      products:'',
      image: ''}
  }

  refreshList = (list) => {
    this.setState({
      companies: list,
      currentCompany: {
        name: '',
        description:'',
        products:'',
        image: ''
      }
    })
  }

  setCompany = (apiValue) => {
    const {name, description, products, image} = apiValue;
    this.setState({currentCompany: {name, description, products, image}})
    console.log(this.state.currentCompany)
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
        <h1>Galvanize NYC Company Directory</h1>
        <ImgForm setCompany={this.setCompany}/>
        <CurrentComp currentCompany={this.state.currentCompany}/>
        <br/><br/>
        {
          companyList.map( eachComp => {
            return <Company key={eachComp.id} eachComp={eachComp} setCompany={this.setCompany} />
          })
        }
        {/* <EditForm currentCompany={this.state.CurrentCompany} refreshList={this.refreshList}/> */}
      </div>
    );
  }
}

export default App;
