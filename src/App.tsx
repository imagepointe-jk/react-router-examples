import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Profile } from "./Profile";
import { Home } from "./Home";
import { Navbar } from "./Navbar";
import { Settings } from "./Settings";
import { Search } from "./Search";
import { ViewUser } from "./ViewUser";

function App() {
  //Putting the big-picture navigation structure here is a good idea.
  //Notice the general pattern for defining route paths and their elements.
  //Profile and Settings demonstrate how to tell Router that a route will have nested routes whose path props will be defined relatively (see inside the elements for details).
  //Search shows how to use search params.
  //ViewUser shows how to use params by name, and how to nest routes inside a route that is using a param.
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile/*" element={<Profile />} />
        <Route path="/settings/*" element={<Settings />} />
        <Route path="/search" element={<Search />} />
        <Route path="/view-user/:userId/*" element={<ViewUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
