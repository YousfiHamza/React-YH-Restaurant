import React, { Component } from "react";
import { storeProducts, detailProduct } from "./data";

const ProductContext = React.createContext();
//Provider//
//Consumer//

class ProductProvider extends Component {
  state = {
    products: [],
    // products: storeProducts ( store the reference so evry changes we make will take place at the source, we dont want that ! we will use the method setProducts down after)
    detailProduct, //ES6 syntax : no need to riht the same thing twice (detailsproduct: detailsProduct,)
    cart: [],
    //modal pop-up
    modalOpen: false,
    modalProduct: detailProduct,
    //cart page
    cartSubTotal: 0,
    cartTax: 0,
    cartTotal: 0,
  };

  componentDidMount() {
    if (!sessionStorage.getItem("iproducts")) {
      this.setProducts();
    } else {
      console.log("using data from session storage");
    }
  }

  componentWillMount() {
    if (
      sessionStorage.getItem("iproducts") &&
      sessionStorage.getItem("icart") &&
      sessionStorage.getItem("icartSubTotal") &&
      sessionStorage.getItem("icartTax") &&
      sessionStorage.getItem("icartTotal")
    ) {
      this.setState({
        cart: JSON.parse(sessionStorage.getItem("icart")),
        products: JSON.parse(sessionStorage.getItem("iproducts")),
        detailProduct: JSON.parse(sessionStorage.getItem("idetailProduct")),
        cartSubTotal: JSON.parse(sessionStorage.getItem("icartSubTotal")),
        cartTax: JSON.parse(sessionStorage.getItem("icartTax")),
        cartTotal: JSON.parse(sessionStorage.getItem("icartTotal")),
      });
    }
  }

  setProducts = () => {
    let tempProducts = [];
    storeProducts.forEach((item) => {
      const singleItem = { ...item };
      tempProducts = [...tempProducts, singleItem];
    });
    this.setState(() => {
      return { products: tempProducts };
    });
  };

  // This method preventsus from rewritting that code inside everyTime
  getItem = (id) => {
    const product = this.state.products.find((item) => item.id === id);
    return product;
  };

  handleDetail = (id) => {
    const product = this.getItem(id);
    this.setState({
      detailProduct: product,
    });
  };

  addToCart = (id) => {
    let tempProducts = [...this.state.products];
    const index = tempProducts.indexOf(this.getItem(id));
    const product = tempProducts[index];
    product.inCart = true;
    product.count = 1;
    const price = product.price;
    product.total = price;
    this.setState(
      () => {
        return { product: tempProducts, cart: [...this.state.cart, product] };
      },
      () => {
        this.addTotals();
      }
    );
  };

  openModal = (id) => {
    const product = this.getItem(id);
    this.setState(() => {
      return {
        modalProduct: product,
        modalOpen: true,
      };
    });
  };

  closeModal = () => {
    this.setState(() => {
      return { modalOpen: false };
    });
  };

  increment = (id) => {
    let tempCart = [...this.state.cart];
    const selectedProduct = tempCart.find((item) => item.id === id);

    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];

    product.count++;
    product.total = product.price * product.count;

    this.setState(
      () => {
        return {
          cart: [...tempCart],
        };
      },
      () => {
        this.addTotals();
      }
    );
  };

  decrement = (id) => {
    let tempCart = [...this.state.cart];
    const selectedProduct = tempCart.find((item) => item.id === id);

    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];

    product.count--;
    if (product.count === 0) {
      product.count = 1;
    }
    product.total = product.price * product.count;
    this.setState(
      () => {
        return {
          cart: [...tempCart],
        };
      },
      () => {
        this.addTotals();
      }
    );
  };

  removeItem = (id) => {
    let tempProducts = [...this.state.products];
    let tempCart = [...this.state.cart];

    tempCart = tempCart.filter((item) => item.id !== id);

    const index = tempProducts.indexOf(this.getItem(id));
    let removedProduct = tempProducts[index];

    removedProduct.inCart = false;
    removedProduct.count = 0;
    removedProduct.total = 0;

    this.setState(
      () => {
        return {
          cart: [...tempCart],
          products: tempProducts,
        };
      },
      () => {
        this.addTotals();
      }
    );
  };

  clearCart = () => {
    this.setState(
      () => {
        return {
          cart: [],
        };
      },
      () => {
        this.setProducts();
        this.addTotals();
      }
    );
  };

  addTotals = () => {
    let subTotal = 0;
    this.state.cart.map((item) => (subTotal += item.total));
    const tempTax = subTotal * 0.2;
    const tax = parseFloat(tempTax.toFixed(2));
    const total = subTotal + tax;
    this.setState(() => {
      return {
        cartSubTotal: subTotal,
        cartTax: tax,
        cartTotal: total,
      };
    });
  };

  componentWillUpdate(nextProps, nextState) {
    sessionStorage.setItem(
      "idetailProduct",
      JSON.stringify(nextState.detailProduct)
    );
    sessionStorage.setItem("iproducts", JSON.stringify(nextState.products));
    sessionStorage.setItem("icart", JSON.stringify(nextState.cart));
    sessionStorage.setItem("icartSubTotal", nextState.cartSubTotal);
    sessionStorage.setItem("icartTax", nextState.cartTax);
    sessionStorage.setItem("icartTotal", nextState.cartTotal);
  }

  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          addToCart: this.addToCart,
          closeModal: this.closeModal,
          openModal: this.openModal,
          increment: this.increment,
          decrement: this.decrement,
          removeItem: this.removeItem,
          clearCart: this.clearCart,
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
