import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const Socials = () => {
  return (
    <section className="p-5 bg-dark text-dark" id="socials">
      <Container>
        <div className="text-center text-light">
          <h2>
            Socials <span className="text-primary">/&gt;</span>
          </h2>
          <p>Let's connect through Twitter or Linkedin!</p>
        </div>
        <Row className="gap-2 text-center justify-content-center align-items-center">
          <Col>
            <Card className="bg-light mx-auto" style={{ width: "224px" }}>
              {/* Twitter */}
              <Card.Body>
                <div className="h1 mb-3">
                  <i className="bi bi-twitter-x"></i>
                </div>
                <Card.Title>Twitter / X</Card.Title>
                <Button
                  variant="secondary"
                  as="a"
                  target="_blank"
                  href="https://twitter.com/XnonXte"
                >
                  Visit Twitter
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card className="bg-light mx-auto" style={{ width: "224px" }}>
              {/* Instagram */}
              <Card.Body>
                <div className="h1 mb-3">
                  <i className="bi bi-instagram"></i>
                </div>
                <Card.Title>Instagram</Card.Title>
                <Button
                  variant="secondary"
                  as="a"
                  target="_blank"
                  href="https://www.instagram.com/xnonxte/"
                >
                  Visit Instagram
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card className="bg-light mx-auto" style={{ width: "224px" }}>
              {/* Facebook */}
              <Card.Body>
                <div className="h1 mb-3">
                  <i className="bi bi-facebook"></i>
                </div>
                <Card.Title>Facebook</Card.Title>
                <Button
                  variant="secondary"
                  as="a"
                  target="_blank"
                  href="https://facebook.com/quddussalam2005"
                >
                  Visit Facebook
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card className="bg-light mx-auto" style={{ width: "224px" }}>
              {/* Youtube */}
              <Card.Body>
                <div className="h1 mb-3">
                  <i className="bi bi-youtube"></i>
                </div>
                <Card.Title>YouTube</Card.Title>
                <Button
                  variant="secondary"
                  as="a"
                  target="_blank"
                  href="https://www.youtube.com/@xnonxte"
                >
                  Visit YouTube
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card className="bg-light mx-auto" style={{ width: "224px" }}>
              {/* Linkedin */}
              <Card.Body>
                <div className="h1 mb-3">
                  <i className="bi bi-linkedin"></i>
                </div>
                <Card.Title>Linkedin</Card.Title>
                <Button
                  variant="secondary"
                  as="a"
                  target="_blank"
                  href="https://www.linkedin.com/in/quddus-salam/"
                >
                  Visit Linkedin
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Socials;
