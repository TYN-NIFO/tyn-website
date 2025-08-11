import { Route, Routes } from "react-router-dom";
import React, { Suspense, lazy } from "react";
import "./App.css";
import ScrollToTop from "./components/ScrollToTop";
import Loader from "./components/Loader";

const Homepage = lazy(() => import("./components/Homepage"));
const Alliance = lazy(() => import("./components/Alliance"));
const CoInnovation = lazy(() => import("./components/CoInnovation"));
const Event = lazy(() => import("./components/EventPage/EventReworked"));
const Yzone = lazy(() => import("./components/Yzone"));
const Nifo = lazy(() => import("./components/Nifo"));
const NotFound = lazy(() => import("./components/NotFound"));
const OurInsights = lazy(() => import("./components/Our Insights/page"));
const YnsightDetail = lazy(() => import("./components/Our Insights/YnsightDetail"));
const WhitepaperDetail = lazy(() => import("./components/Our Insights/WhitepaperDetails"));
const BlogDetail = lazy(() => import("./components/Our Insights/BlogDetail"));
const IndustryYnsights = lazy(() => import("./components/Our Insights/IndustryYnsights"));

function App() {
  return (
    <>
      <ScrollToTop />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Homepage />} exact />
          <Route path="/alliance" element={<Alliance />} exact />
          <Route path="/co-innovation" element={<CoInnovation />} exact />
          <Route path="/ynfinity" element={<Event />} exact />
          <Route path="/yzone" element={<Yzone />} exact />
          <Route path="/nifo" element={<Nifo />} exact />
          <Route path="/ynsights" element={<OurInsights />} exact />
          <Route path="/ynsights/blog/:slug" element={<BlogDetail />} />
          <Route path="/ynsights/:slug" element={<WhitepaperDetail />} />
          <Route path="/ynsight/:slug" element={<YnsightDetail />} />
          <Route path="/ynsights/industry/:industrySlug" element={<IndustryYnsights />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
