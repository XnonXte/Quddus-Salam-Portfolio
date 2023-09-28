import Container from "react-bootstrap/Container";

import { MainFooterProps } from "../types/MainFooterProps";

const MainFooter = ({ background }: MainFooterProps) => {
  return (
    <section className="p-5 text-light text-center" style={{ background }}>
      <Container>
        <h5>Created with 💖 by Quddus Salam "XnonXte"</h5>
        <span>
          My online name is XnonXte, pronounced /Zee-Nan/ or /Eks-Non/ whichever
          you prefer :D
        </span>
      </Container>
    </section>
  );
};

export default MainFooter;
