import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import GalileoDesign from "./pages/GalileoDesign1";
import GalileoDesign from "./pages/GalileoDesign";
import GalileoDesign1 from "./pages/GalileoDesign11";
import Depth0Frame1 from "./pages/Depth0Frame1";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/galileo-design":
        title = "";
        metaDescription = "";
        break;
      case "/galileo-design1":
        title = "";
        metaDescription = "";
        break;
      case "/depth-0-frame-0":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<GalileoDesign />} />
      <Route path="/galileo-design" element={<GalileoDesign />} />
      <Route path="/galileo-design1" element={<GalileoDesign1 />} />
      <Route path="/depth-0-frame-0" element={<Depth0Frame1 />} />
    </Routes>
  );
}
export default App;
