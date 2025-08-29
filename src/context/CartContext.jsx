import { createContext, useState } from "react";

export const CartContext = createContext();
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  //Las funciones para modificar el carrito:
  //Agregar Items
  const addItem = (item, qty) => {
    if (isInCart(item.id)) {
      //existe en el carrito y yo tengo que sumar cantidades
      const carritoActualizado = cart.map((event) => {
        if (event.id === item.id) {
          //actualisar con la nueva cantidad
          return { ...event, cantidad: event.cantidad + qty };
        } else {
          //devuelveo el prod como esta
          return event;
        }
      });
      setCart(carritoActualizado);
    } else {
      //agregar y modificar el estado del carrito manteniendo los datos
      setCart([...cart, { ...item, cantidad: qty }]);
    }
  };

  //Borre todo el carrito
  const clear = () => {
    setCart([]);
  };

  //Elimine un item
  const removeItem = (id) => {
    setCart(cart.filter((event) => event.id !== id));
  };

  //Diga el total a pagar

  const cartTotal = () => {
    return cart.reduce(
      (acc, event) => (acc += event.cantidad * event.precio),
      0
    );
  };
  //Diga el total de items en el carrito (CartWidget)

  const cartQuantity = () => {
    return cart.reduce((acc, event) => (acc += event.cantidad), 0);
  };

  //devolver true o false si esta o no en el carrito
  const isInCart = (id) => {
    return cart.some((event) => event.id === id);
  };

  return (
    <CartContext.Provider
      value={{ cart, clear, addItem, removeItem, cartQuantity, cartTotal }}
    >
      {children}
    </CartContext.Provider>
  );
};
