import { Link, useSearchParams } from "react-router-dom";

export function Search() {
  //useSearchParams returns an array to be destructured, similar to React's default useState.
  //The second element from the array sets the searchParams programmatically, but below we use Links instead, to provide the same functionality a user would expect from normal "a" tags (e.g. open in new tab).
  const [searchParams] = useSearchParams();
  const keywords = searchParams.get("keywords");
  const category = searchParams.get("category");
  const tags = searchParams.get("tags");

  return (
    <>
      <h2>Search</h2>
      <p>Try the search params "keywords", "category", and "tags".</p>
      <ul>
        <li>Keywords: {keywords}</li>
        <li>Category: {category}</li>
        <li>Tags: {tags}</li>
      </ul>
      <ul>
        <li>
          <Link to="/search?keywords=cats,dogs">Search for cats and dogs</Link>
        </li>
        <li>
          <Link to="/search?category=animals">Search for animals</Link>
        </li>
      </ul>
    </>
  );
}
