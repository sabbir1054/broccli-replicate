import React, { useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../../Redux/slices/featureProductsSlice";
import Product from "../Products/Product";

const FeatureProducts = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  const products = useSelector((state) => state.featureProducts.data);

  return (
    <div>
      <h1 className="text-center py-3">Our Feature Product</h1>
      <Container className="bg-light pb-5">
        <Row xs={2} md={3} lg={4} className="g-4">
          {products.map((product, i) => (
            <Product product={product} key={i}></Product>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default FeatureProducts;
