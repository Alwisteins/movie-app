import { FaHome } from "react-icons/fa";
import { MdMovie } from "react-icons/md";
import { PiTelevisionSimpleFill } from "react-icons/pi";

const navMenu = [
  {
    name: "Home",
    path: "/",
    icon: FaHome,
  },
  {
    name: "Movies",
    path: "/movies",
    icon: MdMovie,
  },
  {
    name: "Series",
    path: "/series",
    icon: PiTelevisionSimpleFill,
  },
];

export default navMenu;
