import "./App.css";
import { Routes, Route} from "react-router-dom";
import BookShelfComponent from "./components/BookShelfsComponent";
import SearchComponent from "./components/SearchComponent";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={
            <BookShelfComponent />
        }>
        </Route>
        <Route path="/search" element={
          <SearchComponent />
        }>

        </Route>
      </Routes>
    </>
  );
}

export default App;
