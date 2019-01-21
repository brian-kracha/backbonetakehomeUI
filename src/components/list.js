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
         <th ><small style={styles.tableRow}>Name</small></th>
         <th><small>Price</small></th>
         <th><small>Code</small></th>
         <th><small>Created By</small></th>
         <th><small>Last Modified</small></th>
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
            modified= {element.last_modified}
          />
          )
        )
      }
    </tbody>
  </Table>)
}
const styles = {
  tableRow: {
    text: 'green'

  }
}
export default List
