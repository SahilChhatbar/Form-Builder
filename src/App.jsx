import "./App.css";
import Layout from "./components/Layout.jsx";
import GeneratedForm from "./components/GeneratedForm.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/generate" element={<GeneratedForm />} />
      </Routes>
    </Router>
  );
}
