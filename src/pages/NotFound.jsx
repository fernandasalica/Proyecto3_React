import React from "react";
import Card from "react-bootstrap/Card";

const NotFound = () => {
  return (
    <Card className="containerError text-center">
      <Card.Body>
        <Card.Title>
          <h1 className="titleError pt-4">- ERROR 404 -</h1>
        </Card.Title>
        <Card.Text className="img-error">
          <p>
            {" "}
            Awww... no te preocupes. <br /> Es solo un error 404. Lo que estas
            buscando puede haberse extraviado en la memoria a largo plazo.{" "}
          </p>
          <img
            src={require("../img/img-error.gif")}
            alt="Gif intensamente"
            className="gif"
          />
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default NotFound;
