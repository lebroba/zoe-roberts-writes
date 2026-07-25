
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import Books from "./pages/Books";
import About from "./pages/About";
import Freebies from "./pages/Freebies";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import './i18n';

const App = () => (
  <TooltipProvider>
    <Toaster />
    <Sonner />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/books" element={<Books />} />
        <Route path="/about" element={<About />} />
        <Route path="/freebies" element={<Freebies />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/events" element={<Navigate to="/freebies" replace />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </TooltipProvider>
);

export default App;
