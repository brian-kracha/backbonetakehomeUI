import React, { Component } from 'react'
import Header from './components/header'
import List from './components/list'
import './App.css'

class App extends Component {
  // i started with leaving products in state just to properly pass the state of the products to the nested components before building them from the express server
  state = {
    products: []
  }
  async componentWillMount(){
    console.log('mounted',this.state.products)
    let info = await fetch("http://localhost:8000/products")
    let json = await info.json()
    console.log(json)
    console.log(json._embedded.products);

  }

  render() {
    return (
      <div className="App">
        <Header/>
        <List
        //assigning my props as state to then pass down to the list component
          list={this.state.products}
        />
      </div>
    )
  }
}

export default App
