import { createBrowserRouter } from "react-router";
import Home from "./Home";
import AddPrescription from "./AddPrescription";
import UploadPhoto from "./UploadPhoto";
import PrescriptionDetails from "./PrescriptionDetails";
import Search from "./Search";
import FamilyProfiles from "./FamilyProfiles";
import Splash from "./Splash";
import LogoShowcase from "./LogoShowcase";

export const router = createBrowserRouter([
  {
    path: "/splash",
    Component: Splash,
  },
  {
    path: "/",
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
