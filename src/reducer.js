export function reducer(state, { type, payload }) {
  switch (type) {

    case 'SET_GOODS':
      return {
        ...state,
        goods: payload || [],
        loading: false,
      };

    case 'ADD_TO_CART': {
      const itemIdx = state.order.findIndex((orderItem) => orderItem.id === payload.mainId);

      let newOrder = null;
      if (itemIdx < 0) {
        const newItem = {
          ...payload,
          quantity: 1,
        };
        newOrder = [...state, newItem];
      } else {
        newOrder = state.order.map((orderItem, idx) => {
          if (idx === itemIdx) {
            return {
              ...orderItem,
              quantity: orderItem.quantity + 1,
            };
          } else {
            return orderItem;
          }
        });
      }
      return {
        ...state,
        order: newOrder,
        alertName: payload.displayName,
      }
    }

    case 'REMOVE_FROM_CART':
      return {
        ...state,
        order: state.order.filter((el) => el.id !== payload.id),
      }

    case 'INCREMENT_QUANTITY':
      return {
        ...state,
        order: state.order.map((el) => {
          if (el.id === payload.id) {
            const newQuantity = el.quantity + 1;
            return {
              ...el,
              quantity: newQuantity,
            };
          } else {
            return el;
          }
        }),
      }

    case 'DECREMENT_QUANTITY':
      return {
        ...state,
        order: state.order.map((el) => {
          if (el.id === payload.id) {
            const newQuantity = el.quantity - 1;
            return {
              ...el,
              quantity: newQuantity >= 0 ? newQuantity : 0,
            };
          } else {
            return el;
          }
        }),
      }

    case 'TOGGLE_CART':
      return {
        ...state,
        isCartShow: !state.isCartShow,
      }

    case 'CLOSE_ALERT':
      return {
        ...state,
        alertName: ''
      }

    default:
      return state;
  }
}