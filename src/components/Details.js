import React, { Component } from "react";
import { ProductConsumer } from "../Context";
import { Link } from "react-router-dom";
import { ButtonContainer, CartButtonContainer } from "./Button";

export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const {
            id,
            img,
            price,
            chef,
            title,
            info,
            inCart
          } = value.detailProduct;
          return (
            <div className="container py-5">
              <div className="row">
                {/* title */}
                <div className="text-title col-10 mx-auto text-center text-slanted text-green my-5">
                  <h1>{title}</h1>
                </div>
                {/* Product Infos */}
                <div className="row">
                  <div className="col-10 mx-auto col-md-6 my-3">
                    <img
                      src={img}
                      className="img-fluid  rounded-pill"
                      alt="ProductImage"
                    />
                    {/* img-fluid to make sur the img fits */}
                  </div>
                  <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                    <h4 className="text-chef text-uppercase mt-3 mb-2">
                      Préparée par :<br />
                      <span className="text-uppercase text-muted">{chef}</span>
                    </h4>
                    <h4 className="text-red">
                      <strong>
                        Prix:{" "}
                        <span className="text-uppercase text-green">
                          ${price}
                        </span>
                      </strong>
                    </h4>
                    <p className="text-capitalize font-weight-bold mt-3 mb-0">
                      Plus d'infos :<p className="text-muted lead">{info}</p>
                    </p>
                    {/* Buttons */}
                    <div className="text-muted lead">
                      <Link to="/">
                        <ButtonContainer detail>
                          Retour Aux Chhiwates
                        </ButtonContainer>
                      </Link>
                      <CartButtonContainer
                        disabled={inCart}
                        onClick={() => {
                          value.addToCart(id);
                          value.openModal(id);
                        }}
                      >
                        {inCart ? "En Panier" : "Ajouter Au Panier"}
                      </CartButtonContainer>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}
