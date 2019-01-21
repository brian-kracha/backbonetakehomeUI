import React from 'react'
import { Table,Image } from 'react-bootstrap'
import Item from './item'
const List = ({list, image}) => {
  console.log(list)
  return(
    <Table responsive>
      <thead>
       <tr>
         <th><small style={styles.tableRow}>Product</small></th>
         <th><small style={styles.tableRow}></small></th>
         <th><small style={styles.tableRow}>Price</small></th>
         <th><small style={styles.tableRow}>Code</small></th>
         <th><small style={styles.tableRow}>Created By</small></th>
         <th><small style={styles.tableRow}>Last Modified</small></th>
       </tr>
     </thead>
     <tbody style= {styles.body}>
      {
        list.map(element => (

          <Item
            image= {image}
            id={element.id}
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
    color: 'grey',
    fontSize:8,
  },
  body: {
    justifyContent: 'space-between'
  },

}
export default List
