import React from "react";
import { Button, Modal } from "react-bootstrap";
import { Form, Formik } from "formik";
import { singupSchema } from "../schemas";
import CustomRePass from "./CustomRePass";
import CustomInput from "./CustomInput";
import CustomPass from "./CustomPass";

const onSubmit = async (actions) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  actions.resetForm();
};

const SignUp = ({ show, handleClose }) => {
  return (
    <Formik
      initialValues={{ username: "", password: "", confirmpass: "" }}
      validationSchema={singupSchema}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title className="text-dark">
                Registro de Usuarios
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <CustomInput
                  label="Usuario"
                  name="username"
                  type="text"
                  placeholder="Bruno Díaz"
                />
                <CustomPass
                  label="Contraseña"
                  name="password"
                  type="password"
                  placeholder="Contraseña"
                />
                <CustomRePass
                  label="Confirmar Contraseña"
                  name="confirmpass"
                  type="password"
                  placeholder="Confirmar Contraseña"
                />
                {/* <button disabled={isSubmitting} type="submit" className="mt-5">
                  Submit
                </button> */}
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Cerrar
              </Button>
              <Button type="submit" variant="primary" disabled={isSubmitting}>
                Crear Cuenta
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      )}
    </Formik>
  );
};
export default SignUp;
