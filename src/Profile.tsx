import { Link, Route, Routes } from "react-router-dom";
import { MyInfo } from "./MyInfo";
import { MyOtherDetails } from "./MyOtherDetails";

export function Profile() {
  //Because of the "*" in the App.tsx route for this element, we don't have to spell out the full route structure in the routes below.
  //We can do "my-other-details" instead of "/profile/my-other-details". This is important for reducing typos and managing complexity as an app grows and gains more routes.
  //A blank string "" indicates that the route is the "relative root" of the route it's nested within.
  return (
    <>
      <h1>Profile</h1>
      <ul>
        <li>
          <Link to="">My Info</Link>
        </li>
        <li>
          <Link to="my-other-details">My Other Details</Link>
        </li>
      </ul>
      <Routes>
        <Route path="" element={<MyInfo />} />
        <Route path="my-other-details" element={<MyOtherDetails />} />
      </Routes>
    </>
  );
}
