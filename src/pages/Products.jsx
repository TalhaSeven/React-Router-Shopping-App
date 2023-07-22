import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  const getProducts = async () => {
    let url = "https://fakestoreapi.com/products";
    try {
      const { data } = await axios(url);
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <Container className="mt-3">
      <Row className="justify-content-center align-items-center">
        {products.map((product) => {
          const { id, title, image, price } = product;
          return (
            <Col key={id} sm={6} md={4} xl={3} className="my-2 " style={{ width:"300px" }}>
              <Card className="shadow p-3">
                <Card.Img
                  variant="top"
                  src={image}
                  onClick={() => navigate(`${id}`,{state:product})}
                  style={{ height:"200px" }}
                />
                <Card.Body>
                  <Card.Title style={{ height: "100px", overflow: "hidden" }}>
                    {title}
                  </Card.Title>
                  <Card.Text className="text-danger h5">{price}€</Card.Text>
                  <Button
                    onClick={() => navigate(`${id}`, {state:product})}
                    className="btn btn-success w-100 mt-1"
                    variant="primary"
                  >
                    Go Detail
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default Products;
