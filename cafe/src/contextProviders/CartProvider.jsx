import { createContext } from "react";
import { useState } from "react";

//the context is created:
export const CartProviderContext = createContext({
  //these are initial values that will be overridden by
  //actual values when context provider is used

  //FUNCTIONS:
  get: () => [],
  set: () => {},
  add: () => {},
  remove: () => {},
  //STATE VARIABLES:
  count: 0,
  totalValue: 0,
});

// CartProvider() will give context to all children:
export const CartProvider = ({ children }) => {
  // 1. state variables for cart items and count:
  const [cartItems, setCartItems] = useState([]),
    [count, setCount] = useState(0);

  //2. function to fetch in depth information about the
  //products that are in the cart:
  const get = () => {
    return cartItems;
  };

  //3. function to add or remove items from the cart
  const addRemoveFromCart = (id, quantity) => {
    //variable to track whether item
    //(identified by ID) is already in cart:
    let foundItemInCart = false;

    //map through existing cartItems (array) to
    //update count:
    const cart = cartItems.map((d) => {
      //for each item "d" in cartItems, it initializes
      //a variable "newCount" with correct count for that item:
      let newCount = d.count;

      //Checking for matching id:
      //compares the id of current item (d.id) with specified
      //id, if there is a match fountItemInCart is true, which
      //means newCount will be updated by adding to quantity
      if (d.id === id) {
        foundItemInCart = true;
        newCount = newCount + quantity;
      }

      //return updated Item: "Cart"
      //returns a new object that is a copy of current item "d"
      //with count updated to newCount:
      return {
        ...d,
        count: newCount,
      };
    });

    //if current item not in cart, and quantity is positive
    //add it to the cart
    if (!foundItemInCart && quantity > 0) {
      cart.push({ id, count: quantity });
    }

    //sort out items with count < 0 to avoid negative count in cart
    const readyCart = cart.filter((d) => d.count > 0);

    //calculate new total count taking readyCart into consideration:
    let newTotalCount = 0;
    readyCart.forEach((item) => (newTotalCount += item.count));

    //finally update state variables count and cart
    setCount(newTotalCount);
    setCartItems(readyCart);
  };

  // 4. Function to add items to the cart
  const add = (id, quantity) => {
    addRemoveFromCart(id, quantity);
  };

  // 5. Function to remove items from the cart
  const remove = (id, quantity) => {
    addRemoveFromCart(id, -quantity);
  };

  //6. creating an object that contains functions and state variables:
  const value = {
    get,
    add,
    remove,
    count,
    //total value
  };

  //7 provide the context to the children components:

  return (
    <CartProviderContext.Provider value={value}>
      {children}
    </CartProviderContext.Provider>
  );
};
