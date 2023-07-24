import { useLocation, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

const ProductDetail = () => {
  const navigate = useNavigate();
  const { state: product } = useLocation();
  return (
    <Container className="mt-3 w-50">
      <Row>
        <Col xs={12} sm={8} md={6} lg={4} className="my-2 mx-auto">
          <Card className="shadow p-3">
            <Card.Title className="fw-bold">{product.title}</Card.Title>
            <Card.Img
              variant="top"
              src={product.image}
              className=""
              style={{ width: "18rem",maxWidth: "100%", height: "auto" }}
            />
            <Card.Body>
              <Card.Text className="text-muted text-justify">
                {product.description}
              </Card.Text>
              <Card.Text className="fw-bold text-danger fs-2">
                {product.price}€
              </Card.Text>
              <div className="d-flex justify-content-center">
                <Button
                  variant="success"
                  className="me-2"
                  onClick={() => navigate(`/`)}
                >
                  Go Home
                </Button>
                <Button variant="danger" onClick={() => navigate(-1)}>
                  Go Back
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
