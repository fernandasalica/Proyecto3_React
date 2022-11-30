import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Login = ({ show, handleClose, handleShowSignUp, auth, validate, login, logout }) => {
  const handleToggleModal = (evt) => {
    evt.preventDefault();
    handleClose();
    handleShowSignUp();
  };

  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  
  const navigate = useNavigate();

  const handleLogin = () => {
    const [userNameOk, passwordOk] = validate(userName, password);
    if (userNameOk && passwordOk) {
      login(userName);
      setUserName('');
      setPassword('');
      handleClose();
      navigate ("/Contact")
      toast('bienvenido ' + userName)
    }
  };

  const handleInputUserName = (evt) => {
    setUserName(evt.target.value);
  }
  const handleInputPassword= (evt) => {
    setPassword(evt.target.value);
  }
    
  return (
    <>
    <ToastContainer/>
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Iniciar sesión</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Usuario</Form.Label>
            <Form.Control type="text" 
                          placeholder="Ingrese su usuario" 
                          onInput={handleInputUserName}
                          value={userName}/>
            <Form.Text className="text-muted">
              Por favor ingrese su nombre de usuario correctamente.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control type="password" 
                          placeholder="Ingrese su contraseña"
                          onInput={handleInputPassword}
                          value={password} />
          </Form.Group>
          <Form.Text>
            Olvidó su contraseña?{" "}
            <Link to="/RecoveryPass" onClick={handleClose}>
              Recuperar
            </Link>
          </Form.Text>
          <br />
          <Form.Text>
            Todavia no tienes cuenta?
            <a href="#" onClick={handleToggleModal}>
              Registrate!
            </a>
          </Form.Text>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cerrar
        </Button>
        <Button variant="primary" onClick={handleLogin}>
          Ingresar
        </Button>
      </Modal.Footer>
    </Modal>
    </>
  );
};
export default Login;
