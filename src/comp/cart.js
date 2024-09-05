import React from "react";
import "./cart.css";
import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";

const Cart = ({ cart, setCart }) => {
  // Augmenter la quantité du produit dans le panier
  const incqty = (product) => {
    const exist = cart.find((x) => {
      return x.id === product.id;
    });
    setCart(
      cart.map((curElm) => {
        return curElm.id === product.id
          ? { ...exist, qty: exist.qty + 1 }
          : curElm;
      })
    );
  };

  // Diminuer la quantité du produit dans le panier
  const decqty = (product) => {
    const exist = cart.find((x) => {
      return x.id === product.id;
    });
    setCart(
      cart.map((curElm) => {
        return curElm.id === product.id
          ? { ...exist, qty: exist.qty - 1 }
          : curElm;
      })
    );
  };

  // Supprimer le produit du panier
  const removeproduct = (product) => {
    const exist = cart.find((x) => {
      return x.id === product.id;
    });
    if (exist.qty > 0) {
      setCart(
        cart.filter((curElm) => {
          return curElm.id !== product.id;
        })
      );
    }
  };

  // Prix total
  const total = cart.reduce((price, item) => price + item.qty * item.price, 0);

  return (
    <>
      <div className="cart">
        <h3>#panier</h3> {/* #cart devient #panier */}
        {cart.length === 0 && (
          <>
            <div className="empty_cart">
              <h2>Votre panier est vide</h2>{" "}
              {/* "Your Shopping cart is empty" devient "Votre panier est vide" */}
              <Link to="/shop">
                <button>Faire des achats</button>{" "}
                {/* "Shop Now" devient "Faire des achats" */}
              </Link>
            </div>
          </>
        )}
        <div className="container">
          {cart.map((curElm) => {
            return (
              <>
                <div className="box">
                  <div className="img_box">
                    <img src={curElm.image} alt=""></img>
                  </div>
                  <div className="detail">
                    <div className="info">
                      <h4>{curElm.cat}</h4>
                      <h3>{curElm.Name}</h3>
                      <p>Prix: €{curElm.price}</p>{" "}
                      {/* "Price" devient "Prix" */}
                      <p>Total: €{curElm.price * curElm.qty}</p>
                    </div>
                    <div className="quantity">
                      <button onClick={() => incqty(curElm)}>+</button>
                      <input type="number" value={curElm.qty}></input>
                      <button onClick={() => decqty(curElm)}>-</button>
                    </div>
                    <div className="icon">
                      <li onClick={() => removeproduct(curElm)}>
                        <AiOutlineClose />
                      </li>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
        <div className="bottom">
          {cart.length > 0 && (
            <>
              <div className="Total">
                <h4>Sous-total: €{total}</h4>{" "}
                {/* "Sub Total" devient "Sous-total" */}
              </div>
              <button>Payer</button> {/* "checkout" devient "Payer" */}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
