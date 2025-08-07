import { Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./components/Homepage";
import Alliance from "./components/Alliance";
import CoInnovation from "./components/CoInnovation";
import Event from "./components/EventPage/EventReworked";
import Yzone from "./components/Yzone";
import Nifo from "./components/Nifo";
import ScrollToTop from "./components/ScrollToTop";
import NotFound from "./components/NotFound";
import OurInsights from "./components/Our Insights/page";
import YnsightDetail from "./components/Our Insights/YnsightDetail";
import WhitepaperDetail from "./components/Our Insights/WhitepaperDetails";
import IndustryYnsights from "./components/Our Insights/IndustryYnsights";
import BlogDetail from "./components/Our Insights/BlogDetail";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Homepage />} exact />
        <Route path="/alliance" element={<Alliance />} exact />
        <Route path="/co-innovation" element={<CoInnovation />} exact />
        <Route path="/ynfinity" element={<Event />} exact />
        <Route path="/yzone" element={<Yzone />} exact />
        <Route path="/nifo" element={<Nifo />} exact />
        <Route path="/ynsights" element={<OurInsights />} exact />
        <Route path="/ynsights/:slug" element={<WhitepaperDetail />} />
        <Route path="/ynsight/:slug" element={<YnsightDetail />} />
        <Route path="/ynsights/industry/:industrySlug" element={<IndustryYnsights />} />
        <Route path="/ynsights/blog/:slug" element={<BlogDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
