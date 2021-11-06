import { Routes, Route } from "react-router-dom";
import "./App.css";
import { About } from "./Components/About";
import { Navbar } from "./Components/Navbar";
import { News } from "./Components/News";

function App() {
  const pageSize = 9;
  const apiKey = "bbfac00a3669467db238d05e47e8ad2b";
  return (
    <div className="App">
      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
              <Navbar />{" "}
              <News
                apiKey={apiKey}
                key="general"
                pageSize={pageSize}
                country="in"
                category="general"
              />
            </>
          }
        />
        <Route
          exact
          path="/Business"
          element={
            <>
              <Navbar />{" "}
              <News
                apiKey={apiKey}
                key="Business"
                pageSize={pageSize}
                country="in"
                category="Business"
              />
            </>
          }
        />
        <Route
          path="/About"
          element={
            <>
              <Navbar /> <About />
            </>
          }
        />
        <Route
          path="/Sports"
          element={
            <>
              <Navbar />{" "}
              <News
                apiKey={apiKey}
                key="sports"
                pageSize={pageSize}
                country="in"
                category="sports"
              />
            </>
          }
        />
        <Route
          path="/Entertainment"
          element={
            <>
              <Navbar />{" "}
              <News
                apiKey={apiKey}
                key="entertainment"
                pageSize={pageSize}
                country="in"
                category="entertainment"
              />
            </>
          }
        />
        <Route
          path="/Health"
          element={
            <>
              <Navbar />{" "}
              <News
                apiKey={apiKey}
                key="health"
                pageSize={pageSize}
                country="in"
                category="health"
              />
            </>
          }
        />
        <Route
          path="/Science"
          element={
            <>
              <Navbar />{" "}
              <News
                apiKey={apiKey}
                key="Science"
                pageSize={pageSize}
                country="in"
                category="Science"
              />
            </>
          }
        />
        <Route
          path="/Technology"
          element={
            <>
              <Navbar />{" "}
              <News
                apiKey={apiKey}
                key="technology"
                pageSize={pageSize}
                country="in"
                category="technology"
              />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
