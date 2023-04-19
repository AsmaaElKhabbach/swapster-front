import React, { useState } from 'react';
import './styles.scss';
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
  MDBInput,
} from 'mdb-react-ui-kit';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { changeUserInfo } from '../../../store/reducers/settings'
import { changeUserData } from '../../../api/auth';

export default function Modal() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [centredModal, setCentredModal] = useState(false);
  const toggleShow = () => setCentredModal(!centredModal);
  
  const user = useSelector((state) => state.settings.user.data)
  console.log(user)

  const handleInputChange = (event) => {
  const newValue = event.target.value;

  const inputName =event.target.name;

    console.log(newValue);
  dispatch(changeUserInfo({
    value: newValue,
    name:inputName,
  }))
  }

  // fonction de modification de compte
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(user)
    toggleShow();
    dispatch(changeUserData())
  
  };


  return (
    <>
      <MDBBtn onClick={toggleShow}>Modifier mon compte</MDBBtn>

      <MDBModal tabIndex="-1" show={centredModal} setShow={setCentredModal}>
        <MDBModalDialog centered>
          <MDBModalContent className="changeForm">
            <MDBModalHeader>
              <MDBModalTitle>Modifier mon compte</MDBModalTitle>
              <MDBBtn className="btn-close" color="none" onClick={toggleShow} />
            </MDBModalHeader>
            <MDBModalBody>
              <div>
              <Form onSubmit={handleSubmit}>
                <MDBInput
                  className="changeForm__form-input"
                  name="name"
                  wrapperClass="mb-4"
                  placeholder="Nouveau pseudo"
                  value={user.name}
                  onChange={handleInputChange}
                  size="lg"
                  id="form1"
                  type="text"
                />
                <MDBInput
                  className="changeForm__form-input"
                  name="city"
                  wrapperClass="mb-4"
                  placeholder="Nouvelle localisation"
                  value={user.city}
                  onChange={handleInputChange}
                  size="lg"
                  id="form3"
                  type="text"
                />
                <MDBInput
                  className="changeForm__form-password"
                  name="password"
                  wrapperClass="mb-4"
                  placeholder="Nouveau mot de passe"
                  value={user.password}
                  onChange={handleInputChange}
                  size="lg"
                  id="form4"
                  type="password"
                />
                <MDBBtn
                  type="submit"
                  className="mb-4 w-100 gradient-custom-4"
                  size="lg"
                >
                  Envoyer
                </MDBBtn>
                </Form>
              </div>

            </MDBModalBody>
            <MDBModalFooter className="modalFooter">
              <MDBBtn color="secondary" onClick={toggleShow}>
                Fermer
              </MDBBtn>

            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
}
