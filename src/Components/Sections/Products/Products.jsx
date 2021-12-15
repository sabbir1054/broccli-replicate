import React from "react";
import { Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import Product from "./Product";

const Products = () => {
  const products = useSelector((state) => state.products.data);
//   console.log(products);
    
    
  return (
    <Container className="bg-light pb-5">
      <h1 className="py-5 text-center">Our Products</h1>
      <Row xs={2} md={3} lg={4} className="g-4">
        {products.map((product, i) => (
          <Product product={product} key={i}></Product>
        ))}
      </Row>
    </Container>
  );
};

export default Products;
