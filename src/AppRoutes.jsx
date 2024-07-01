import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { Detail } from "./pages/detail/Detail";
import { Capture } from "./pages/capture/Capture";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movies/detail/:id" element={<Detail />} />
      <Route path="/movies/detail/:id/capture-moment" element={<Capture />} />
    </Routes>
  );
};
