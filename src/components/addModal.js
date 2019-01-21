import React from 'react'
import ReactDOM from'react-dom'
import { Modal,Button,Form, FormGroup, ControlLabel, Col, } from 'react-bootstrap'

const ModalForm = ({
  show,
  hideModal,
  addItem,
  createItem,
  values,
  nameChange,
  priceChange,
  codeChange,
  creatorChange,
  name,
  price,
  code,
  creator }) => {


  addItem= ()=>{

    createItem({
      name: name,
      code: code,
      price: price,
      creator:  creator

    })
  }


    return (
      <Modal
        show={show}
        bsSize="small"
        aria-labelledby="contained-modal-title-sm"
      >
        <Modal.Header >
          <Modal.Title id="contained-modal-title-sm">Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Create a new item!</h4>
          <Form horizontal onSubmit={addItem}>
          <FormGroup controlId="formHorizontalName">
            <Col componentClass={ControlLabel} sm={3}>
              Name
            </Col>
            <Col sm={10}>
              <input
                type="text"
                placeholder="Name"
                value = {name}
                onChange={nameChange}
              />
            </Col>
          </FormGroup>
            <FormGroup controlId="formHorizontalPrice">
              <Col componentClass={ControlLabel}  sm={3}>
                Price
              </Col>
              <Col sm={10}>
                <input
                  type="text"
                  placeholder="123456"
                  value= {price}
                  onChange= {priceChange}
                />
              </Col>
            </FormGroup>

            <FormGroup controlId="formHorizontalPassword">
              <Col componentClass={ControlLabel} sm={3}>
                Code
              </Col>
              <Col sm={10}>
                <input
                  type="text"
                  placeholder="code"
                  value = { code}
                  onChange= {codeChange}
                />
              </Col>
            </FormGroup>

            <FormGroup controlId="formHorizontalPassword">
              <Col componentClass={ControlLabel} sm={3}>
                Created By
              </Col>
              <Col sm={10}>
                <input
                  type="text"
                  placeholder="Hodor"
                  value = {creator}
                  onChange= {creatorChange}
                />
              </Col>
            </FormGroup>


            <FormGroup>
              <Col smOffset={2} sm={10}>
                <Button type="submit">Enter</Button>
              </Col>
            </FormGroup>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={hideModal}>Close</Button>
        </Modal.Footer>
      </Modal>
    )

}
export default ModalForm
