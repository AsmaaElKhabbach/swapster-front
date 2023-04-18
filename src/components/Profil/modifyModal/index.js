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
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { modifyUserAccount } from '../../../api/auth';

export default function Modal() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // fonction de modification de compte
  const handleModifyAccount = (event) => {
    event.preventDefault();
    dispatch(modifyUserAccount());
    // dispatch(logout());
    navigate('/profile', { replace: true });
  };
  const [centredModal, setCentredModal] = useState(false);

  const toggleShow = () => setCentredModal(!centredModal);

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
                <MDBInput
                  className="changeForm__form-input"
                  name="name"
                  wrapperClass="mb-4"
                  placeholder="Votre pseudo"
                  size="lg"
                  id="form1"
                  type="text"
                />
                <MDBInput
                  className="changeForm__form-input"
                  name="email"
                  wrapperClass="mb-4"
                  placeholder="Votre email"
                  size="lg"
                  id="form2"
                  type="email"
                />
                <MDBInput
                  className="changeForm__form-input"
                  name="city"
                  wrapperClass="mb-4"
                  placeholder="Votre ville"
                  size="lg"
                  id="form3"
                  type="text"
                />
                <MDBInput
                  className="changeForm__form-password"
                  name="password"
                  wrapperClass="mb-4"
                  placeholder="Veuillez saisir un mot de passe"
                  size="lg"
                  id="form4"
                  type="password"
                />
                <MDBInput
                  className="changeForm__form-password"
                  name="passwordConfirm"
                  wrapperClass="mb-4"
                  placeholder="Veuillez confirmer le mot de passe"
                  size="lg"
                  id="form5"
                  type="password"
                />
                <MDBBtn
                  type="submit"
                  className="mb-4 w-100 gradient-custom-4"
                  size="lg"
                  onClick={handleModifyAccount}

                >
                  Envoyer
                </MDBBtn>
              </div>

            </MDBModalBody>
            <MDBModalFooter className="modalFooter">
              <MDBBtn color="secondary" onClick={toggleShow}>
                Fermer
              </MDBBtn>
              <MDBBtn>Sauvegarder</MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
}
