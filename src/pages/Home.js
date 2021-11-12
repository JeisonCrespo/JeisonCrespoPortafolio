import React from "react";
import Flores from "../img/flores.svg";
import Coder from "../img/jeisoncrespo.png";
import { Link } from "react-router-dom";

function Home() {
  return (
    <main className="hero section-page">
      <div className="info-hero">
        <div className="soy">
          <h1>
            Hola soy
            <br />
            <strong>Jeison Crespo</strong>
          </h1>
          <p>
            Un programador con gran pasión por el desarrollo de aplicaciones
            movil y web.
          </p>
          <Link to="/sobre-mi" className="noSelect">
            <button className="btn-primary noSelect">Ver más</button>
          </Link>
        </div>
        <figure className="flores-hero">
          <img src={Flores} alt="flores" />
        </figure>
      </div>
      <figure className="img-hero">
        <img src={Coder} alt="Jeison Crespo" />
      </figure>
    </main>
  );
}

export default Home;
