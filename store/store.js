import { create } from 'zustand'



export const Store = create(set => ({

cart:{

    items: []
},

adddToBasket: data => set(state => {
    const itemIndex = state.cart.items.findIndex(item => item.id === data.id);
    if (itemIndex === -1) {
      // Item not found in the cart, add it as a new item
      return {
        cart: {
          items: [...state.cart.items, {...data, quantity: 1}]
        }
      };
    } else {
      // Item already exists in the cart, increase its quantity
      const updatedItems = [...state.cart.items];
      updatedItems[itemIndex] = {...updatedItems[itemIndex], quantity: updatedItems[itemIndex].quantity + 1};
      return {
        cart: {
          items: updatedItems
        }
      };
    }
  }),

  removeFromCart: (data) => set(state => {
    const itemIndex = state.cart.items.findIndex(item => item.id === data.id);
    if (itemIndex !== -1) {
      // Item found in the cart, decrease its quantity or remove it entirely
      const updatedItems = [...state.cart.items];
      const item = updatedItems[itemIndex];
      if (item.quantity > 1) {
        // Decrease the quantity of the item
        updatedItems[itemIndex] = {...item, quantity: item.quantity - 1};
      } else {
        // Remove the item entirely
        updatedItems.splice(itemIndex, 1);
      }
      return {
        cart: {
          items: updatedItems
        }
      };
    }
    return state;
  }),

resturantSlice:{},



}))