import Container from "react-bootstrap/Container";

const Footer = () => {
  return (
    <section className="p-2 text-light" style={{ backgroundColor: "#2c3e50" }}>
      <Container>
        <h6>&copy; 2023 Quddus Salam</h6>
        <span>
          This webpage is created using React Bootstrap, hosted on GitHub Pages.
        </span>
      </Container>
    </section>
  );
};

export default Footer;
