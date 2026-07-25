import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import Book from "./pages/Book";
import About from "./pages/About";
import FreeGuide from "./pages/FreeGuide";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";
import "./i18n";

const App = () => (
  <BrowserRouter>
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/book" element={<Book />} />
      <Route path="/free-guide" element={<FreeGuide />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />

      {/* Old paths kept as redirects so existing inbound links survive. */}
      <Route path="/books" element={<Navigate to="/book" replace />} />
      <Route path="/freebies" element={<Navigate to="/free-guide" replace />} />
      <Route path="/events" element={<Navigate to="/free-guide" replace />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;
