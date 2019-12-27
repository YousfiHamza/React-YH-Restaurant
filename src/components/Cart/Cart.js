/* we had the cart js file in the componenet 
folder but now it's in the Cart folder inside the componenet folder, the thing that will break our code because we need to readjust all the files in our program that import the CART component; OR:
- name the cart file : index.js
- create a package.json file in this folder and specify that the cart.js file is the main file of the folder
Now we dont need to make any changes in other files, and its better this way !
*/

import React, { Component } from "react";
import Title from "../Title";
import CartColums from "./CartColums";
import EmptyCart from "./EmptyCart";
import { ProductConsumer } from "../../Context";
import CartList from "./CartList";
import CartTotals from "./CartTotals";

export default class Cart extends Component {
  render() {
    return (
      <section>
        <ProductConsumer>
          {value => {
            const { cart } = value;
            if (cart.length > 0) {
              return (
                <React.Fragment>
                  <Title title="- Votre Panier -" />
                  <CartColums />
                  <CartList value={value} />
                  <CartTotals value={value} />
                </React.Fragment>
              );
            } else {
              return <EmptyCart />;
            }
          }}
        </ProductConsumer>
      </section>
    );
  }
}
