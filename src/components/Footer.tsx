import Container from "react-bootstrap/Container";

const Footer = () => {
  return (
    <section className="p-2 text-light" style={{ backgroundColor: "#2c3e50" }}>
      <Container>
        <h6>&copy; 2023 Quddus Salam</h6>
        <p>
          This webpage is created using React Bootstrap, hosted on GitHub Pages.
        </p>
        <a
          target="_blank"
          href="https://github.com/XnonXte/Quddus-Salam-Portfolio"
          className="link link-light"
        >
          <i className="bi bi-github"></i> GitHub
        </a>
      </Container>
    </section>
  );
};

export default Footer;
