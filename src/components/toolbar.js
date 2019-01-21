import React from 'react'
import { Nav, NavItem } from 'react-bootstrap'

const navInstance =({createItem,renderModal,show}) => {
  return (
    <Nav bsStyle="pills" activeKey={1} show= {show}  >
      <NavItem eventKey={1} onClick={renderModal}>
        Add Item
      </NavItem>

    </Nav>

  )
}

export default navInstance
