import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import { routes } from "./features/router/Config";
import Layout from "./features/layout/Layout";

const App = () => (
  <Router>
    <Layout>
      <Routes>
        {routes.map((route) => (
          <Route path={route.path} element={route.element} key={`Route_${route.path}`} />
        ))}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  </Router>
);

export default App;
