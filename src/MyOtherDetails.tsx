import { Link } from "react-router-dom";

export function MyOtherDetails() {
  return (
    <div>
      <h2>These are my other details</h2>
      <p>
        You can link to a route nested elsewhere like this{" "}
        <Link to="/settings/privacy">(go to privacy settings)</Link> .
      </p>
    </div>
  );
}
