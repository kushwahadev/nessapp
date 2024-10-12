import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import Business from "./components/Business/Business.jsx";
import Technology from "./components/Technology/Technology.jsx";
import Sports from "./components/Sports/Sports.jsx";
import Entertainment from "./components/Entertainment/Entertainment.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Home />} />
      <Route path="/Business" element={<Business />} />
      <Route path="/Technology" element={<Technology />} />
      <Route path="/Sports" element={<Sports />} />
      <Route path="/Entertainment" element={<Entertainment />} />
    </Route>
  )
);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
