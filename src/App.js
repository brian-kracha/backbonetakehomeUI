import React, { Component } from 'react'
import Header from './components/header'
import List from './components/list'
import Toolbar from './components/toolbar'
import Modal from './components/modal'
import glass1 from './images/0tortoise2.jpeg'
import glass2 from './images/1aviator.jpeg'
import glass3 from './images/2matte.jpeg'
import glass0 from './images/00goofy.jpeg'
import './App.css'
const API = "http://localhost:8000/products"
class App extends Component {
  constructor(props){
    super(props)
  // i started with leaving products in state just to properly pass the state of the products to the nested components before building them from the express server
  this.state = {
    show: false,
    products: [],
    images: [glass0, glass1, glass2, glass3]
  }
  this.hideModal = this.hideModal.bind(this)
  this.renderModal = this.renderModal.bind(this)

}
  async componentDidMount(){
    let info = await fetch(API)
    let json = await info.json()
    // set the state to the api once the component mounts
    this.setState({products:json})

  }
  renderModal() {
    this.setState({
      show: true
    })
  }
  hideModal(){

   this.setState({
      show: false
    })
  }

  createNewItem=async(item) =>{

        const response = await fetch(API, {
          method: 'POST',
          body: JSON.stringify({
            name:item.name,
            code:item.code,
            price:item.price,
            creator: item.creator,
            last_modified:Date.now()

          }),
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }
        })
          const newitem = await response.json()
              this.setState({products:[newitem,...this.state.products]})
              }

  render() {

    return (
      <div className="App">
        <Header/>
        <Toolbar
        show ={this.state.show}
          createItem= { this.createNewItem }
          renderModal= { this.renderModal }
        />
        <Modal
          show ={this.state.show}
          createItem= { this.createNewItem }
          hideModal= { this.hideModal }
        />
        <List
        //assigning my props as state to then pass down to the list component
          list={ this.state.products }
          image= {this.state.images}
        />
      </div>
    )
  }
}

export default App
