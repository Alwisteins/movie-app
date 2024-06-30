import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { Detail } from "./pages/detail/Detail";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movies/detail/:id" element={<Detail />} />
    </Routes>
  );
};
