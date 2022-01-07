import React from "react";
import { Link } from "react-router-dom";
// import me from "../img/me.png";

function SobreMi() {
  return (
    <main className="section-page">
      <div className="sobremi">
        <div className="gradient-border" id="box">
          <div className="sobre-mi-info">
            <h1>
              Sobre mí <></>
            </h1>
            <br />
            <p>
              Hola, mi nombre es Jeison Alexander Crespo Mendoza, tengo 23 años,
              soy un desarrollador fullstack. Me considero una persona muy
              creativa y autodidacta. A la fecha tengo conocimientos amplios en
              HTML5, CSS3 y JavaScript junto con librerías como React JS,
              preprocesadores de CSS como SASS, Responsive Design, maquetación
              con CSS Grid Layoud y Flexbox, etc.
            </p>
            <br />
            <br />
            <h1>
              Mis habilidades <></>
            </h1>
            <br />
            <div className="list-info-sobremi">
              <ul>
                <li>• React</li>
                <li>• Linux </li>
                <li>• WordPress </li>
                <li>• Angular </li>
              </ul>
              <ul>
                <li>• HTML5</li>
                <li>• CSS3</li>
                <li>• SASS</li>
                <li>• JavaScript</li>
              </ul>
              <ul>
                <li>• Git / GitHub</li>
                <li>• NodeJS</li>
                <li>• MongoDB</li>
              </ul>
              <ul>
                <li>• Figma</li>
                <li>• Photoshop</li>
              </ul>
            </div>
            <div className="sobre-mi-info__links">
              <a className="download-btn" href="/docs/" download>
                <span className="download-icon"></span>Descargar CV
              </a>
              <Link className="download-btn white" to="/proyectos">
                Ver Proyectos
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default SobreMi;
