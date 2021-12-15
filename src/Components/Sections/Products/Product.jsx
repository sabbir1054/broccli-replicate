import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addToCart, addToWishlist } from '../../../Redux/slices/productSlice';
import Products from './Products';
import styles from './Products.module.css'



const Product = (props) => {
    const dispatch = useDispatch();
    const product = props.product;

    return (
      <>
        <Col>
          <Card>
            <Card.Img variant="top" src={product.imgUrl} />
            <Card.Body>
              <Card.Title className="text-center">{product.name}</Card.Title>
              <Card.Text>
                <h5 className="text-center text-success">
                  Price: ${product.price}
                </h5>
              </Card.Text>
            </Card.Body>
            <Card.Footer className="d-flex justify-content-around">
              <span className={styles.icon}>
                <i className="fas fa-eye"></i>
              </span>
              <span className={styles.icon} onClick={()=>dispatch(addToWishlist(props.product))}>
                <i className="fas fa-heart"></i>
              </span>
              <span
                className={styles.icon}
                onClick={() => dispatch(addToCart(props.product))}
              >
                <i className="fas fa-shopping-cart"></i>
              </span>
            </Card.Footer>
          </Card>
        </Col>
      </>
    );
};

export default Product;