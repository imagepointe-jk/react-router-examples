import { Link, Route, Routes } from "react-router-dom";
import { ProfileSettings } from "./ProfileSettings";
import { PrivacySettings } from "./PrivacySettings";
import { HistorySettings } from "./HistorySettings";

export function Settings() {
  //See Profile.tsx for more info.
  //This is just a second example of the same pattern used there.
  return (
    <>
      <h1>Settings</h1>
      <ul>
        <li>
          <Link to="">Profile</Link>
        </li>
        <li>
          <Link to="privacy">Privacy</Link>
        </li>
        <li>
          <Link to="history">History</Link>
        </li>
      </ul>
      <Routes>
        <Route path="" element={<ProfileSettings />} />
        <Route path="privacy" element={<PrivacySettings />} />
        <Route path="history" element={<HistorySettings />} />
      </Routes>
    </>
  );
}
