import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";

//pages
import Home from "./Pages/Home";
import About from "./Pages/About";
import Skills from "./Pages/Skills";
import Education from "./Pages/Education";
import Contact from "./Pages/Contact";
import Experience from "./Pages/Experience";
import Projects from "./Pages/Projects";

// import layout for Navbar
import Layout from "./components/Layout";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/education",
        element: <Education />,
      },
      {
        path: "/skills",
        element: <Skills />,
      },
      {
        path: "/experience",
        element: <Experience />,
      },
      {
        path: "/project",
        element: <Projects />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
