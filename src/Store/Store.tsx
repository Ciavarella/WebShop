import React from 'react'

const initialState: any = { 
  cartItems: 0,
  cart: []
};

const CartStateContext = React.createContext(initialState)
const CartDispatchContext = React.createContext(initialState)

function stateReducer(state: any, action: any) {
  switch (action.type) {
    case 'addToCart':
      state.cart.push(action.payload);
      return { ...state };
    case 'incrementQuantity':
      const index = state.cart.findIndex((e: any) => e.id === action.payload);
      state.cart[index].amount = state.cart[index].amount + 1;
      return { ...state };
    case 'decrementQuantity':
      const i = state.cart.findIndex((e: any) => e.id === action.payload);
      if(state.cart[i].amount === 1) {
        state.cart.splice(i, 1);
        return { ...state };
      }
      state.cart[i].amount = state.cart[i].amount - 1;
      return { ...state };
    case 'removeProduct':
      const j = state.cart.findIndex((e: any) => e.id === action.payload);
      state.cart.splice(j, 1);
      return { ...state };
    default:
      throw new Error();
  }
}

function CartProvider({children}: any) {
  const [state, dispatch] = React.useReducer(stateReducer, initialState)
  return (
    <CartStateContext.Provider value={state}>
      <CartDispatchContext.Provider value={dispatch}>
        {children}
      </CartDispatchContext.Provider>
    </CartStateContext.Provider>
  )
}

function useCartState() {
  const context = React.useContext(CartStateContext)
  if (context === undefined) {
    throw new Error('State must be used within a Provider')
  }
  return context
}

function useCartDispatch() {
  const context = React.useContext(CartDispatchContext)
  if (context === undefined) {
    throw new Error('Dispatch must be used within a Provider')
  }
  return context
}

export {CartProvider, useCartState, useCartDispatch}