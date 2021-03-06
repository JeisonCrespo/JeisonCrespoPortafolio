import React from "react";
import Flores from "../img/flores.svg";
import Web from "../img/macbook.png";
import Movile from "../img/movil.png";
import { Link } from "react-router-dom";

function Proyectos() {
  return (
    <main className="section-page">
      <div className="ProyectosSection">
        <div className="movile-web-proyects">
          <Link to="/proyectos/web" className="card-proyecto noSelect card-1">
            <div className="info-card">
              <h1>Web</h1>
              <p>Projects</p>
            </div>
            <img src={Web} alt="Web" />
          </Link>
          <Link to="/proyectos/movil" className="card-proyecto noSelect card-2">
            <div className="info-card">
              <h1>Móvil</h1>
              <p>Projects</p>
            </div>
            <img src={Movile} alt="Móviles" />
          </Link>
        </div>
        <figure className="flores-projects-vuelta">
          <img src={Flores} alt="flores" />
        </figure>
        <figure className="flores-projects">
          <img src={Flores} alt="flores" />
        </figure>
      </div>
    </main>
  );
}

export default Proyectos;
