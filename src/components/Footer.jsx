import React from "react";
import Container from "react-bootstrap/Container";

const Footer = (props) => {
  const bgStyle = { backgroundColor: "#f5f5f5" };

  return (
    <footer style={bgStyle} className="mt-auto py-5 text-center ">
      <Container>
        {props.children}
        <i className="fas fa-code" /> with <i className="fas fa-heart" /> by{" "}
        <a
          className="badge badge-dark"
          rel="noopener"
          href="https://github.com/bertoazevedo"
          aria-label="My GitHub"
        >
          Berto Azevedo
        </a>{" "}
        using <i className="fab fa-react" />
        <p>
          <small className="text-muted">
            O código do projeto é open source. Sinta-se à vontade para alterar e
            fazer a sua própria versão.
          </small>
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
