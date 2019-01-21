import React from 'react'
import { Nav, NavItem } from 'react-bootstrap'

const navInstance =({createItem,renderModal,show}) => {
  return (
    <Nav bsStyle="pills" activeKey={1} show= {show}  onClick={renderModal}>
      <NavItem eventKey={1} >
        Add Item
      </NavItem>
      <NavItem eventKey={2} >
        Delete Item
      </NavItem>
    </Nav>

  )
}

export default navInstance
