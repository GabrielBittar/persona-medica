import { createBrowserRouter } from "react-router";
import LandingPage from "./pages/LandingPage";
import MapPage from "./pages/MapPage";
import Room5 from "./pages/Room5";
import Room1 from "./pages/Room1";
import Room2 from "./pages/Room2";
import Room3 from "./pages/Room3";
import Room4 from "./pages/Room4";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: LandingPage,
  },
  {
    path: "/map",
    Component: MapPage,
  },
  {
    path: "/reuniao-de-feedback",
    Component: Room5,
  },
  {
    path: "/comunicando-noticia-sensivel",
    Component: Room1,
  },
  {
    path: "/pratica-de-consultorio",
    Component: Room2,
  },
  {
    path: "/room3",
    Component: Room3,
  },
  {
    path: "/room4",
    Component: Room4,
  },
]);
