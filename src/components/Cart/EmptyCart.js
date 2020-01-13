import React from "react";
import Title from "../Title";
import { Link } from "react-router-dom";
import { ButtonContainer } from "../Button";

export default function EmptyCart() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-10 mx-auto text-center text-title">
          <Title title=" Votre Panier est actuellement VIDE !" />
          <Link to="/">
            <ButtonContainer detail>Retour Aux Chhiwates</ButtonContainer>
          </Link>
        </div>
      </div>
    </div>
  );
}
