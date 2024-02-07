import { useParams } from "react-router-dom";

export function UserInfo() {
  //the route for this element did not include ":userId", but the route it's nested within did, so this element inherits it and can use it freely.
  const { userId } = useParams();

  return <h3>Info about user {userId}</h3>;
}
