import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GridLoader } from "react-spinners";
import StudyNow from "./components/StudyNow";
import Vaction from "./components/Vacation";
import Relocation from "./components/Relocation";
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Service = lazy(() => import("./pages/Services"));
const Destination = lazy(() => import("./pages/Destination"));
const Contact = lazy(() => import("./pages/Contact"));

const override = {
  display: "flex",
  justifyContent: "center", // Center horizontally
  alignItems: "center", // Center vertically
  height: "100vh", // Set the height of the container to the full viewport height
  borderColor: "#db0000",
};

function App() {
  const [color] = React.useState("#265670");
  return (
    <Router>
      {/* <Navabr /> */}

      <Suspense
        fallback={
          <div
            style={override}
            className="flex justify-center items-center h-screen"
          >
            <GridLoader
              color={color}
              size={40}
              aria-label="Loading Spinner"
              data-testid="loader"
              className="flex justify-center items-center"
            />
          </div>
        }
      >
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/destination" element={<Destination />} />
          <Route path="contact" element={<Contact />} />
          <Route path="/StudyNow" element={<StudyNow />} />
          <Route path="/Vacation" element={<Vaction />} />
          <Route path="/Relocation" element={<Relocation />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
