import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import DefinitionPage from "./pages/DefinitionPage";
import ComparisonPage from "./pages/ComparisonPage";
import CauseEffectPage from "./pages/CauseEffectPage";
import WorksCitedPage from "./pages/WorksCitedPage";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/definition" element={<DefinitionPage />} />
          <Route path="/comparison" element={<ComparisonPage />} />
          <Route path="/cause-effect" element={<CauseEffectPage />} />
          <Route path="/works-cited" element={<WorksCitedPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}
