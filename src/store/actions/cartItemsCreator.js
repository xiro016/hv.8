import { shopCartActions } from "../reducers/shopCartReducers";

const { addToCart, removeFromCart } = shopCartActions;

export const cartAddBook = (id) => (dispatch, getState) => {
  const { books } = getState().BookListReducer;
  const { cartItems } = getState().ShopCartReducer;
  console.log(getState());
  const booksItem = books.find((el) => el.id === id);
  const cartItemIdx = cartItems.findIndex((el) => el.id === id);

  if (cartItemIdx >= 0) {
    const oldItems = cartItems.map((el) => {
      return {
        ...el,
      };
    });
    console.log(oldItems[cartItemIdx].count);
    const count = oldItems[cartItemIdx].count;
    oldItems[cartItemIdx].count = count + 1;
    oldItems[cartItemIdx].total = (count + 1) * booksItem.price;

    return dispatch(addToCart(oldItems));
  }
  const newCartItem = [...cartItems];

  const newItem = {
    total: booksItem.price,
    count: 1,
    title: booksItem.title,
    id: booksItem.id,
  };

  newCartItem.push(newItem);
  dispatch(addToCart(newCartItem));

  console.log(booksItem);
};

export const cartRemoveBook = (id) => (dispatch, getState) => {
  const { books } = getState().BookListReducer;
  const { cartItems } = getState().ShopCartReducer;
  console.log(getState());
  const booksItem = books.find((el) => el.id === id);
  const cartItemIdx = cartItems.findIndex((el) => el.id === id);

  if (cartItems[cartItemIdx].count > 1) {
    const oldItems = cartItems.map((el) => {
      return {
        ...el,
      };
    });
    console.log(oldItems[cartItemIdx].count);
    const count = oldItems[cartItemIdx].count;
    oldItems[cartItemIdx].count = count - 1;
    oldItems[cartItemIdx].total = (count - 1) * booksItem.price;

    return dispatch(removeFromCart(oldItems));
  }

  const removedItems = cartItems.filter((el) => el.id !== id);
  dispatch(removeFromCart(removedItems));
};

export const cartDeleteBook = (id) => (dispatch, getState) => {
  const { cartItems } = getState().ShopCartReducer;
  const removedItems = cartItems.filter((el) => el.id !== id);
  dispatch(removeFromCart(removedItems));
};
