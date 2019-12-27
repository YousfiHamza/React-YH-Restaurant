import React from "react";

export default function CartItem({ item, value }) {
  const { id, title, img, price, total, count } = item;
  const { increment, decrement, removeItem } = value;

  return (
    <div className="c-card row my-2 text-capitalize text-center">
      <div className="col-10 mx-auto col-lg-2 ">
        <img
          src={img}
          style={{ width: "10rem", height: "8rem" }}
          className="img-fluid rounded-circle border border-warning"
          alt="Produit"
        />
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none"> Chhiwa : </span>
        {title}
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none"> Prix : $</span>
        {price}
      </div>
      <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
        <div className="d-flex justify-content-center">
          <div>
            <span className="btn btn-red mx-1" onClick={() => decrement(id)}>
              -
            </span>
          </div>
          <div>
            <span className="btn btn-black mx-1">{count}</span>
          </div>
          <div>
            <span className="btn btn-green mx-1" onClick={() => increment(id)}>
              +
            </span>
          </div>
        </div>
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <div className="cart-icon" onClick={() => removeItem(id)}>
          <i className="fas fa-trash"></i>
        </div>
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <strong>total produit : $ {total}</strong>
      </div>
    </div>
  );
}
