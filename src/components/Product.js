import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../Context";
//we wont always have the data from our file so we need to make sure that we receive the data in the proper form
import PropTypes from "prop-types";

export default class Product extends Component {
  render() {
    const { id, title, img, price, inCart } = this.props.product;
    return (
      <ProducterWraper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
        <div className="card">
          <ProductConsumer>
            {value => (
              <div
                className="img-container p-5"
                onClick={() => {
                  console.log("you clicked on the img container");
                }}
              >
                <Link to="/details">
                  <img
                    src={img}
                    alt={title}
                    className="card-img-top rounded-circle border border-danger"
                    onClick={() => value.handleDetail(id)}
                  />
                </Link>
                <button
                  className="cart-btn"
                  disabled={inCart}
                  onClick={() => {
                    value.addToCart(id);
                  }}
                >
                  {inCart ? (
                    <p className="text-capitalize mb-0" disabled>
                      En Panier
                    </p>
                  ) : (
                    <i className="fas fa-cart-plus" />
                  )}
                </button>
              </div>
            )}
          </ProductConsumer>
          <div className="card-footer d-flex justify-content-between">
            <p className="align-self-center mb-0">{title}</p>
            <h5>
              <span class="mr-1">$</span>
              {price}
            </h5>
          </div>
        </div>
      </ProducterWraper>
    );
  }
}

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    img: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    inCart: PropTypes.bool
  }).isRequired
};

const ProducterWraper = styled.div`
  .card {
    transition: all 0.5s linear;
    border-radius: 2rem;
    overflow: hidden;
  }
  .card-footer {
    background: transparent;
    border-top: transparent;
    transition: all 0.5s linear;
    font-family: "Oswald", cursive;
    text-transform: uppercase;
  }
  &:hover {
    .card {
      border: 0.04rem solid rgba(0, 0, 0, 0.2);
      box-shadow: 2px 5px 15px 0px rgba(0, 0, 0, 1);
    }
    .card-footer {
      background: rgba(200, 200, 200);
    }
  }
  .img-container {
    position: relative;
    overflow: hidden;
    &:hover {
      .cart-btn {
        transform: translate(0, 0);
      }
      .card-img-top {
        transform: scale(1.2);
      }
    }
  }
  .card-img-top {
    transition: all 0.5s linear;
  }

  .cart-btn {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 0.2rem 0.4rem;
    background: var(--lightRed);
    border: none;
    font-size: 1.4rem;
    color: var(--mainGreen);
    border-radius: 0.5rem 0 0 0;
    transition: all 0.3s linear;
    transform: translate(100%, 100%);
    &:hover {
      background: var(--mainRed);
      color: var(--lightGreen);
    }
  }
`;
