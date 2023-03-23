import { Button, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import {
  cartAddBook,
  cartDeleteBook,
  cartRemoveBook,
  createItem,
} from "../../store/actions/cartItemsCreator";

const ShopCartTable = (el, index) => {
  const items = useSelector((state) => state.ShopCartReducer.cartItems);
  const totalPrice = useSelector((state) => state.ShopCartReducer.cartTotal);

  const dispatch = useDispatch();
  const { title, count, total, id } = el;
  console.log(total);
  const renderItems = (el, index) => {
    const { title, count, total, id } = el;
    const onAddToCart = () => dispatch(cartAddBook(id));
    const onRemoveFromCart = () => dispatch(cartRemoveBook(id));
    const onDeleteFromCart = () => dispatch(cartDeleteBook(id));
    console.log(count * items.length);
    return (
      <tr key={`shop-item-${id}`}>
        <td>{index + 1}</td>
        <td>{title}</td>
        <td>{count}</td>
        <td>{total}$</td>

        <td>
          <Button variant="outline-success" onClick={onAddToCart}>
            <i className="fa-solid fa-circle-plus"></i>
          </Button>
          <Button variant="outline-warning" onClick={onRemoveFromCart}>
            <i className="fa-solid fa-circle-minus"></i>
          </Button>
          <Button variant="outline-danger" onClick={onDeleteFromCart}>
            <i className="fa-solid fa-trash"></i>
          </Button>
        </td>
      </tr>
    );
  };
  return (
    <div>
      <h2>Your Order</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>№</th>
            <th>Item</th>
            <th>Count</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>{items.map(renderItems)}</tbody>
      </Table>
      <div>Total: {totalPrice}$</div>
    </div>
  );
};

export default ShopCartTable;
