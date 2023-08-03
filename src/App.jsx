import "./App.css";
import { Routes, Route } from "react-router-dom";
import Nav from "./utilities/Nav";
import Main from "./pages/Main";
import SecondaryPage from "./pages/SecondaryPage";
import Axios from "axios";

export default function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/second" element={<SecondaryPage />} />
      </Routes>
    </>
  );
}
