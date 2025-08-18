/**
 * Entry point for portfolio app
 * Renders <App /> into root div
 *
 * References:
 * - React Docs (Rendering Elements): https://react.dev/learn
 * - MDN DOM reference: https://developer.mozilla.org/en-US/docs/Web/API/Document
 */
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css"; // Tailwind layers

createRoot(document.getElementById("root")).render(<App />);
