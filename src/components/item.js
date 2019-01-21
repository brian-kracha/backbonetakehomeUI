import React from 'react'


const Item = ({ key, name, code, price, creator }) => {
  return(
    <tr>
      <td >{key}</td>
      <td>{name}</td>
      <td>{code}</td>
      <td>{price}</td>
      <td>{creator}</td>
    </tr>
  )
}

const styles = {
  rowStyle : {
    
  }
}

export default Item
