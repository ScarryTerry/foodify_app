import React from 'react';
import { Button, FloatingLabel, Form} from 'react-bootstrap';
import './Modal.css';

export default class Modal extends React.Component {
  state = {
    isOpen: false
  }
  render() {
    return (
      <React.Fragment>
        <Button variant={"outline-dark"} onClick={() => this.setState({ isOpen: true })}>Add Custom Dish</Button>

        {this.state.isOpen && (<div className="modal">
          <div className="modal-body">
            <h4>Add custom dish</h4>
            <FloatingLabel label="Dish title" className="mb-3 mt-5">
              <Form.Control type="text" />
            </FloatingLabel>
            <FloatingLabel label="Dish description">
              <Form.Control
                as="textarea"
                style={{ minHeight: '150px', maxHeight: '150px' }}
                fixed
              />
            </FloatingLabel>
            <Button variant={"outline-secondary"} onClick={() => this.setState({ isOpen: false })} className="mt-3 w-100">Add custom dish</Button>
          </div>
        </div>)}
      </React.Fragment>
    )
  }
}