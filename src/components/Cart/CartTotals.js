import React from "react";
import { Link } from "react-router-dom";
import { PayementButtonContainer } from "../Button";

export default function CartTotals({ value }) {
  const { cartSubTotal, cartTax, cartTotal, clearCart } = value;
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
            <Link to="/">
              <button
                className="btn btn-outline-danger text-white bg-danger text-uppercase mb-3 px-5"
                typeof="button"
                onClick={() => clearCart()}
              >
                Vider Le Panier
              </button>
            </Link>
            <h5>
              <span className="text-title">Total HT :</span>
              <strong>$ {cartSubTotal}</strong>
            </h5>
            <h5>
              <span className="text-title">TVA :</span>
              <strong>$ {cartTax}</strong>
            </h5>
            <h5>
              <span className="text-title">
                <i class="far fa-arrow-alt-circle-right" /> Total TTC :
              </span>
              <strong>$ {cartTotal}</strong>
            </h5>
            <PayementButtonContainer clas>
              <i class="fas fa-money-check-alt" />
              <span> Passer Au Payement</span>
            </PayementButtonContainer>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
