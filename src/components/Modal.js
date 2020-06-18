import React , {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Modal, ModalBody, ModalHeader, FormGroup, ModalFooter} from 'reactstrap';


function ModalFunctional() {

    return (
        <div>
            <Button color="danger" > </Button>
            <Modal>
                <ModalHeader >Insertar registro</ModalHeader>
                <ModalBody>

                    <FormGroup>
                        <label>
                            ID:
                        </label>
                        <input
                            className="form-control"
                            name="anime"
                            type="text"
                            value={data}
                        />
                    </FormGroup>

                </ModalBody>
                <ModalFooter>
                    <Button color="primary" >Do Something</Button>
                    <Button color="secondary" >Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default ModalFunctional;
