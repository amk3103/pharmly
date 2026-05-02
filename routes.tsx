import { createBrowserRouter } from "react-router";
import Root from "./components/Root";
import Home from "./components/screens/Home";
import AddPrescription from "./components/screens/AddPrescription";
import UploadPhoto from "./components/screens/UploadPhoto";
import PrescriptionDetails from "./components/screens/PrescriptionDetails";
import Search from "./components/screens/Search";
import FamilyProfiles from "./components/screens/FamilyProfiles";
import Splash from "./components/screens/Splash";
import LogoShowcase from "./components/screens/LogoShowcase";

export const router = createBrowserRouter([
  {
    path: "/splash",
    Component: Splash,
  },
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "add", Component: AddPrescription },
      { path: "upload", Component: UploadPhoto },
      { path: "prescription/:id", Component: PrescriptionDetails },
      { path: "search", Component: Search },
      { path: "family", Component: FamilyProfiles },
      { path: "logo", Component: LogoShowcase },
    ],
  },
]);
