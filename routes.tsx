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
  element: <Splash />,
},
  {
    path: "/",
    children: [
      { index: true, element: <Home /> },
      { path: "add", element: <AddPrescription /> },
      { path: "upload", element: <UploadPhoto /> },
      { path: "prescription/:id", element: <PrescriptionDetails /> },
      { path: "search", element: <Search /> },
      { path: "family", element: <FamilyProfiles /> },
      { path: "logo", element: <LogoShowcase /> },
    ],
  },
]);
