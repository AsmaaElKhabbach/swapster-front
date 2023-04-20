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
<<<<<<< HEAD
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { modifyUserAccount } from '../../../api/auth';
=======
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { changeUserInfo } from '../../../store/reducers/settings'
import { changeUserData } from '../../../api/auth';
>>>>>>> ec1610291d50a2555a141bb3f81007b6a3a93c88

export default function Modal() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

<<<<<<< HEAD
  // fonction de modification de compte
  const handleModifyAccount = (event) => {
    event.preventDefault();
    dispatch(modifyUserAccount());
    // dispatch(logout());
    navigate('/', { replace: true });
  };
  const [centredModal, setCentredModal] = useState(false);

  const toggleShow = () => setCentredModal(!centredModal);
=======
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

>>>>>>> ec1610291d50a2555a141bb3f81007b6a3a93c88

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
<<<<<<< HEAD
=======
              <Form onSubmit={handleSubmit}>
>>>>>>> ec1610291d50a2555a141bb3f81007b6a3a93c88
                <MDBInput
                  className="changeForm__form-input"
                  name="name"
                  wrapperClass="mb-4"
                  placeholder="Nouveau pseudo"
<<<<<<< HEAD
=======
                  value={user.name}
                  onChange={handleInputChange}
>>>>>>> ec1610291d50a2555a141bb3f81007b6a3a93c88
                  size="lg"
                  id="form1"
                  type="text"
                />
                <MDBInput
                  className="changeForm__form-input"
                  name="city"
                  wrapperClass="mb-4"
                  placeholder="Nouvelle localisation"
<<<<<<< HEAD
=======
                  value={user.city}
                  onChange={handleInputChange}
>>>>>>> ec1610291d50a2555a141bb3f81007b6a3a93c88
                  size="lg"
                  id="form3"
                  type="text"
                />
                <MDBInput
                  className="changeForm__form-password"
                  name="password"
                  wrapperClass="mb-4"
<<<<<<< HEAD
                  placeholder="Nouveau un mot de passe"
=======
                  placeholder="Nouveau mot de passe"
                  value={user.password}
                  onChange={handleInputChange}
>>>>>>> ec1610291d50a2555a141bb3f81007b6a3a93c88
                  size="lg"
                  id="form4"
                  type="password"
                />
<<<<<<< HEAD
                <MDBInput
                  className="changeForm__form-password"
                  name="passwordConfirm"
                  wrapperClass="mb-4"
                  placeholder="Veuillez confirmer le nouveau mot de passe"
                  size="lg"
                  id="form5"
                  type="password"
                />
=======
>>>>>>> ec1610291d50a2555a141bb3f81007b6a3a93c88
                <MDBBtn
                  type="submit"
                  className="mb-4 w-100 gradient-custom-4"
                  size="lg"
<<<<<<< HEAD
                  onClick={handleModifyAccount}

                >
                  Envoyer
                </MDBBtn>
=======
                >
                  Envoyer
                </MDBBtn>
                </Form>
>>>>>>> ec1610291d50a2555a141bb3f81007b6a3a93c88
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
