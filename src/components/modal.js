import React from 'react'
import { Modal,Button,Form, FormGroup, FormControl, ControlLabel, Checkbox, Col } from 'react-bootstrap'
export default class ModalForm extends React.Component {
  render() {

    const { show, hideModal, createItem} = this.props

    return (
      <Modal
        show={show}
        bsSize="small"
        aria-labelledby="contained-modal-title-sm"
      >
        <Modal.Header closeButton onClick={hideModal}>
          <Modal.Title id="contained-modal-title-sm">Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Create a new item!</h4>
          <Form horizontal onSubmit={createItem}>
          <FormGroup controlId="formHorizontalName">
            <Col componentClass={ControlLabel} sm={3}>
              Name
            </Col>
            <Col sm={10}>
              <FormControl type="text" placeholder="Name" refs="name" />
            </Col>
          </FormGroup>
            <FormGroup controlId="formHorizontalPrice">
              <Col componentClass={ControlLabel} sm={3}>
                Price
              </Col>
              <Col sm={10}>
                <FormControl type="text" placeholder="123456" refs="price" />
              </Col>
            </FormGroup>

            <FormGroup controlId="formHorizontalPassword">
              <Col componentClass={ControlLabel} sm={3}>
                Code
              </Col>
              <Col sm={10}>
                <FormControl type="text" placeholder="code" refs="code" />
              </Col>
            </FormGroup>

            <FormGroup controlId="formHorizontalPassword">
              <Col componentClass={ControlLabel} sm={3}>
                Created By
              </Col>
              <Col sm={10}>
                <FormControl type="text" placeholder="Hodor" refs="creator" />
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
}
