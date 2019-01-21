import React from 'react'
import { Table } from 'react-bootstrap'
import Item from './item'
const List = ({list}) => {
  console.log(list)
  return(
    <Table responsive>
      <thead>
       <tr>
         <th>Product</th>
         <th><small>Name</small></th>
         <th><small>Code</small></th>
         <th><small>Price</small></th>
         <th><small>Creator</small></th>
       </tr>
     </thead>
     <tbody>
      {
        list.map(element => (
          <Item
            key={element.id}
            name= {element.name}
            code= {element.code}
            price={element.price.toFixed(2)}
            creator= {element.creator}
          />
          )
        )
      }
    </tbody>
  </Table>)
}
export default List
