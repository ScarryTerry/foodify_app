import React from 'react';
import { Button, FloatingLabel, Form, Modal, Row } from 'react-bootstrap';

const addCustomDish = ({ show, onHide }) => {
  return (
    
    <Modal
      max-width={500}
      height={400}
      show={show}
      onHide={onHide}
      size="sg"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add Custom Dish
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Row>
            Upload your dish image
          </Row>
          <input className="form-control" type="file" />
          <FloatingLabel label="Dish title" className="mb-3 mt-5">
            <Form.Control placeholder={"Dish title"} type="text" />
          </FloatingLabel>
          <FloatingLabel label="Dish description">
          <Form.Control
            placeholder={"Your Dish Recipe..."}
            as="textarea"
            style={{ minHeight: '150px', maxHeight: '150px' }}
            fixed
          />
          </FloatingLabel>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant={"outline-secondary"}  className="mt-3 w-100" onClick={onHide}>Add custom dish</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default addCustomDish;

// export default class Modal extends React.Component {
//   state = {
//     isOpen: false
//   }
//   render() {
//     return (

      // <React.Fragment>
      //   <Button variant={"outline-dark"} onClick={() => this.setState({ isOpen: true })}>Add Custom Dish</Button>

      //   {this.state.isOpen && (<div className="modal">
      //     <div className="modal-body">
      //       <h4>Add custom dish</h4>
      //       <FloatingLabel label="Dish title" className="mb-3 mt-5">
      //         <Form.Control type="text" />
      //       </FloatingLabel>
      //       <FloatingLabel label="Dish description">
      //         <Form.Control
      //           as="textarea"
      //           style={{ minHeight: '150px', maxHeight: '150px' }}
      //           fixed
      //         />
      //       </FloatingLabel>
      //       <Button variant={"outline-secondary"} onClick={() => this.setState({ isOpen: false })} className="mt-3 w-100">Add custom dish</Button>
      //     </div>
      //   </div>)}
      // </React.Fragment>
    // )
  // }
// }