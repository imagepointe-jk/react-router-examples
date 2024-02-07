import { Link, Route, Routes, useParams } from "react-router-dom";
import { UserInfo } from "./UserInfo";
import { UserContent } from "./UserContent";

export function ViewUser() {
  //the object returned from useParams will not autocomplete, but the spelling of the param you pull from it must match the spelling of the param defined in the route in App.tsx.
  //a misspelling here will not cause an error or warning, but the param will be undefined.
  //note that the param does not need to be redefined for the nested routes here, but they still inherit it and can use it freely.

  const { userId } = useParams();

  return (
    <>
      <h2>Viewing user {userId}</h2>
      <ul>
        <li>
          <Link to="">User Info</Link>
        </li>
        <li>
          <Link to="content">User Content</Link>
        </li>
      </ul>
      <Routes>
        <Route path="" element={<UserInfo />} />
        <Route path="content" element={<UserContent />} />
      </Routes>
    </>
  );
}
