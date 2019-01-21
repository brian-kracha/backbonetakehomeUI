import React, { Component } from 'react'
import Header from './components/header'
import List from './components/list'
import Toolbar from './components/toolbar'
import AddModal from './components/addModal'
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
    images: [glass0, glass1, glass2, glass3],
      name:'',
      price:'',
      code:'',
      creator:''
  }

  this.hideModal = this.hideModal.bind(this)
  this.renderModal = this.renderModal.bind(this)
  this.onNameChange = this.onNameChange.bind(this)
  this.onPriceChange =  this.onPriceChange.bind(this)
  this.onCodeChange = this.onCodeChange.bind(this)
  this.onCreatorChange = this.onCreatorChange.bind(this)
}
  async componentDidMount(){
    let info = await fetch(API)
    let json = await info.json()
    // set the state to the api once the component mounts
    this.setState({products:json})

  }
  //change state to pop up modal
  renderModal() {
    this.setState({
      show: true
    })
  }
  //change state to hide modal
  hideModal(){

   this.setState({
      show: false
    })
  }
  // post to api to add item to the list
  createNewItem =async(item) =>{
    let body = JSON.stringify({
      name:item.name,
      code:item.code,
      price:parseInt(item.price),
      creator:item.creator,
      last_modified:Date.now()
      })

      const response = await fetch(API, {
        method: 'POST',
        body: body
        ,
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      })
      const newitem = await response.json()
        this.setState({
          products:[newitem,...this.state.products],
          name:"",
          code:"",
          price:"",
          creator:"",
          show:false
        })
      }
      //handle the state of the inputs in the modal form for name, price, code, and creator
  onNameChange(event) {
    this.setState({name: event.target.value})
  }

  onPriceChange(event) {
    this.setState({price: event.target.value})
  }

  onCodeChange(event) {
    this.setState({code: event.target.value})
  }

  onCreatorChange(event) {
    this.setState({creator: event.target.value})
  }


  render() {

    return (
      <div className="App">
        <Header/>
        <Toolbar
          show ={ this.state.show }
          createItem= { this.createNewItem }
          renderModal= { this.renderModal }
        />
        <AddModal
          name = { this.state.name }
          nameChange = { this.onNameChange }
          price = { this.state.price }
          priceChange = { this.onPriceChange }
          code = { this.state.code }
          codeChange = { this.onCodeChange }
          creator = { this.state.creator }
          creatorChange = { this.onCreatorChange }
          addItem = { this.addItem }
          show = { this.state.show }
          hideModal = { this.hideModal }
          createItem = { this.createNewItem }

        />
        <List
        //assigning my props as state to then pass down to the list component
          list={ this.state.products }
          image= { this.state.images }

        />
      </div>
    )
  }
}

export default App
