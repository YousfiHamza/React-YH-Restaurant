import React from "react";

export default function CartColums() {
  return (
    <div className="container-fluid mt-2 text-center d-none d-lg-block text-green">
      {/* container fluid to take full width*/}
      <div className="row">
        <div className="col-10 mx-auto col-lg-2">
          <p className="text-uppercase">Chhiwa</p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <p className="text-uppercase">Nom</p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <p className="text-uppercase">Prix</p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <p className="text-uppercase">Quantité</p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <p className="text-uppercase">Retirer</p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <p className="text-uppercase">Total</p>
        </div>
      </div>
    </div>
  );
}
