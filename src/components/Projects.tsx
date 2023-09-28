import Container from "react-bootstrap/Container";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";

const Projects = () => {
  return (
    <section className="bg-dark text-light p-5 pg-lg-0" id="projects">
      <Container style={{ marginTop: "42px" }}>
        <h2 className="text-center">
          <a
            target="_blank"
            href="https://github.com/XnonXte?tab=repositories"
            className="text-decoration-none"
          >
            <span className="text-light">My Projects</span>{" "}
            <span className="text-primary">/&gt;</span>
          </a>
        </h2>
        <p className="text-center">
          These are projects that I am proud to present.
        </p>

        <ListGroup
          variant="flush"
          as="ol"
          numbered
          className="my-4 d-flex flex-column gap-2"
        >
          <ListGroup.Item
            as="li"
            className="d-flex justify-content-between align-items-start bg-dark text-light border-bottom"
          >
            {/* PortalGuessr */}
            <div className="ms-2 me-auto">
              <div className="fw-bold">PortalGuessr</div>
              <span className="d-none d-sm-block">
                Discord bot on guessing Portal chambers.
              </span>
            </div>

            <a
              className="d-sm-none d-block"
              target="_blank"
              href="https://github.com/XnonXte/PortalGuessr"
              style={{ alignSelf: "center" }}
            >
              Visit
            </a>

            <Button
              className="d-sm-block d-none"
              variant="primary"
              as="a"
              target="_blank"
              href="https://github.com/XnonXte/PortalGuessr"
              style={{ alignSelf: "center" }}
            >
              Visit Project
            </Button>
          </ListGroup.Item>

          <ListGroup.Item
            as="li"
            className="d-flex justify-content-between align-items-start bg-dark text-light border-bottom"
          >
            {/* XnonBot */}
            <div className="ms-2 me-auto">
              <div className="fw-bold">XnonBot</div>
              <span className="d-none d-sm-block">
                Multi-purpose Discord bot to make your server life better!
              </span>
            </div>

            <a
              className="d-sm-none d-block"
              target="_blank"
              href="https://github.com/XnonXte/XnonBot-Rewritten"
              style={{ alignSelf: "center" }}
            >
              Visit
            </a>

            <Button
              className="d-sm-block d-none"
              variant="primary"
              as="a"
              target="_blank"
              href="https://github.com/XnonXte/XnonBot-Rewritten"
              style={{ alignSelf: "center" }}
            >
              Visit Project
            </Button>
          </ListGroup.Item>
          <ListGroup.Item
            as="li"
            className="d-flex justify-content-between align-items-start bg-dark text-light border-bottom"
          >
            {/* Nes UI */}
            <div className="ms-2 me-auto">
              <div className="fw-bold">NES-UI</div>
              <span className="d-none d-sm-block">
                <span className="d-none d-sm-block">
                  NES styled CSS framework inspired by Bootstrap.
                </span>
              </span>
            </div>

            <a
              className="d-sm-none d-block"
              target="_blank"
              href="https://github.com/XnonXte/NES-UI"
              style={{ alignSelf: "center" }}
            >
              Visit
            </a>

            <Button
              className="d-sm-block d-none"
              variant="primary"
              as="a"
              target="_blank"
              href="https://github.com/XnonXte/NES-UI"
              style={{ alignSelf: "center" }}
            >
              Visit Project
            </Button>
          </ListGroup.Item>
          <ListGroup.Item
            as="li"
            className="d-flex justify-content-between align-items-start bg-dark text-light border-bottom"
          >
            {/* TaskMaster */}
            <div className="ms-2 me-auto">
              <div className="fw-bold">TaskMaster</div>
              <span className="d-none d-sm-block">
                Todo app created with React and Bootstrap
              </span>
            </div>

            <a
              className="d-sm-none d-block"
              target="_blank"
              href="https://github.com/XnonXte/TaskMaster"
              style={{ alignSelf: "center" }}
            >
              Visit
            </a>

            <Button
              className="d-sm-block d-none"
              variant="primary"
              as="a"
              target="_blank"
              href="https://github.com/XnonXte/TaskMaster"
              style={{ alignSelf: "center" }}
            >
              Visit Project
            </Button>
          </ListGroup.Item>
          <ListGroup.Item
            as="li"
            className="d-flex justify-content-between align-items-start bg-dark text-light border-bottom"
          >
            {/* Math mental */}
            <div className="ms-2 me-auto">
              <div className="fw-bold">Math Mental</div>
              <span className="d-none d-sm-block">
                Game for testing your math skill, created using React and pure
                CSS.
              </span>
            </div>

            <a
              className="d-sm-none d-block"
              target="_blank"
              href="https://github.com/XnonXte/math-mental-react"
              style={{ alignSelf: "center" }}
            >
              Visit
            </a>

            <Button
              className="d-sm-block d-none"
              variant="primary"
              as="a"
              target="_blank"
              href="https://github.com/XnonXte/math-mental-react"
              style={{ alignSelf: "center" }}
            >
              Visit Project
            </Button>
          </ListGroup.Item>
        </ListGroup>

        <div>
          <h4>
            And Several Others <span className="text-primary">/&gt;</span>
          </h4>
          <div className="d-flex flex-column flex-md-row gap-2">
            <a
              target="_blank"
              href="https://github.com/XnonXte/PortalGuessr-FullStack"
              className="link link-light"
            >
              <i className="bi bi-star-fill"></i> PortalGuessr Website (WIP)
            </a>
            <a
              target="_blank"
              href="https://github.com/XnonXte/XnonBot"
              className="link link-light"
            >
              <i className="bi bi-star"></i> Old XnonBot
            </a>
            <a
              target="_blank"
              href="https://github.com/XnonXte/MathBot"
              className="link link-light"
            >
              <i className="bi bi-star"></i> MathBot
            </a>
            <a
              target="_blank"
              href="https://github.com/XnonXte/quiz-game-react"
              className="link link-light"
            >
              <i className="bi bi-star"></i> Quiz Game (Website)
            </a>
            <a
              target="_blank"
              href="https://github.com/XnonXte/"
              className="link link-light"
            >
              <i className="bi bi-star"></i> Quiz Game (Python Console)
            </a>
          </div>
        </div>
      </Container>

      <div className="custom-shape-divider-top-1695877053">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Projects;
