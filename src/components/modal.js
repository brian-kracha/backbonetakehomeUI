import React from 'react'
import { Modal,Button } from 'react-bootstrap'
export default class ModalForm extends React.Component {
  render() {

    const { show, hideModal} = this.props

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

        </Modal.Body>
        <Modal.Footer>
          <Button onClick={hideModal}>Close</Button>
        </Modal.Footer>
      </Modal>
    )
  }
}
