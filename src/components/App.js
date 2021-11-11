import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "../pages/Home";
import Proyectos from "../pages/Proyectos";
import ProjectType from "../pages/ProjectType";
import SobreMi from "../pages/SobreMi";
import Contacto from "../pages/Contacto";
import NotFound from "../pages/NotFound";
import ProjectDetails from "../pages/ProjectDetails";
import Hosting from "../pages/Hosting";

function App() {
  return (
    <Layout>
      <Routes>
        <Route exact path="/" element={<Navigate to="/Home" />} />
        <Route exact path="/Home" element={<Home />} />
        <Route exact path="/proyectos" element={<Proyectos />} />
        <Route exact path="/proyectos/:projectType" element={<ProjectType />} />
        <Route
          exact
          path="/proyectos/:projectType/:projectName"
          element={<ProjectDetails />}
        />
        <Route exact path="/sobre-mi" element={<SobreMi />} />
        <Route exact path="/contacto" element={<Contacto />} />
        <Route exact path="/hosting" element={<Hosting />} />
        <Route element={NotFound} />
      </Routes>
    </Layout>
  );
}

export default App;
