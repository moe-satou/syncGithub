import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Component11 from "./pages/Component11";
import Component1 from "./pages/Component1";
import Component2 from "./pages/Component2";
import Component3 from "./pages/Component3";
import Component4 from "./pages/Component4";
import Component5 from "./pages/Component5";
import Component6 from "./pages/Component6";
import Component7 from "./pages/Component7";
import Component8 from "./pages/Component8";
import Component9 from "./pages/Component9";
import Component10 from "./pages/Component10";
import Component12 from "./pages/Component12";
import Component13 from "./pages/Component13";
import Component14 from "./pages/Component14";
import Component15 from "./pages/Component15";
import Component16 from "./pages/Component16";
import Component17 from "./pages/Component17";

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
      case "/8":
        title = "";
        metaDescription = "";
        break;
      case "/4":
        title = "";
        metaDescription = "";
        break;
      case "/5":
        title = "";
        metaDescription = "";
        break;
      case "/21":
        title = "";
        metaDescription = "";
        break;
      case "/11":
        title = "";
        metaDescription = "";
        break;
      case "/3":
        title = "";
        metaDescription = "";
        break;
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/6":
        title = "";
        metaDescription = "";
        break;
      case "/10":
        title = "";
        metaDescription = "";
        break;
      case "/12":
        title = "";
        metaDescription = "";
        break;
      case "/7":
        title = "";
        metaDescription = "";
        break;
      case "/1":
        title = "";
        metaDescription = "";
        break;
      case "/9":
        title = "";
        metaDescription = "";
        break;
      case "/14":
        title = "";
        metaDescription = "";
        break;
      case "/13":
        title = "";
        metaDescription = "";
        break;
      case "/15":
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
      <Route path="/" element={<Component11 />} />
      <Route path="/8" element={<Component1 />} />
      <Route path="/4" element={<Component2 />} />
      <Route path="/5" element={<Component3 />} />
      <Route path="/21" element={<Component4 />} />
      <Route path="/11" element={<Component5 />} />
      <Route path="/3" element={<Component6 />} />
      <Route path="/" element={<Component7 />} />
      <Route path="/6" element={<Component8 />} />
      <Route path="/10" element={<Component9 />} />
      <Route path="/12" element={<Component10 />} />
      <Route path="/7" element={<Component12 />} />
      <Route path="/1" element={<Component13 />} />
      <Route path="/9" element={<Component14 />} />
      <Route path="/14" element={<Component15 />} />
      <Route path="/13" element={<Component16 />} />
      <Route path="/15" element={<Component17 />} />
    </Routes>
  );
}
export default App;
