import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";

import { cartAddBook } from "../../store/actions/cartItemsCreator";

import classes from "./styles.module.scss"

const BooklListItem = ({ book, addToCart }) => {
  const dispatch = useDispatch();

  const { imgUrl, id, title, price, author } = book;

  return (
    <li className={classes.list_item}>
      <div className={classes.list_item_cover}>
        <img src={imgUrl} alt="book" />
      </div>

      <div className={classes.list_item_details}>
        <h4>{title}</h4>
        <div>{author}</div>
        <div className={classes.list_item_price}>{price}$</div>
        <Button onClick={() => dispatch(cartAddBook(id))}>
          Add to cart
        </Button>
      </div>
    </li>
  );
};

export default BooklListItem;
