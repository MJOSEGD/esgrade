
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ComoFunciona from "./pages/ComoFunciona";
import Funcionalidades from "./pages/Funcionalidades";
import Precios from "./pages/Precios";
import Recursos from "./pages/Recursos";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Contacto from "./pages/Contacto";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/como-funciona" element={<ComoFunciona />} />
                <Route path="/funcionalidades" element={<Funcionalidades />} />
                <Route path="/precios" element={<Precios />} />
                <Route path="/recursos" element={<Recursos />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:id" element={<BlogPost />} />
                <Route path="/contacto" element={<Contacto />} />
                <Route path="/legal" element={<div className="min-h-screen pt-20 flex items-center justify-center bg-slate-800 text-white"><h1 className="text-4xl font-black">Legal - Coming Soon</h1></div>} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
