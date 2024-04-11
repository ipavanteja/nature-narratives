import { Routes, Route, Outlet } from "react-router-dom";

import Home from "./routes/home/Home";

import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Outlet />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
