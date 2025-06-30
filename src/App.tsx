import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import About from "./pages/About";
import Host from "./pages/Host";
import Artist from "./pages/Artist";
import Contact from "./pages/Contact";
import User from "./pages/User";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Layout from "./layout/Layout"; // ✅ your layout with header/footer
import RoleModal from "./components/RoleModal";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <RoleModal />
        <Routes>
          {/* Shared layout with Header + Footer */}
          <Route element={<Layout />}>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/host" element={<Host />} />
            <Route path="/artist" element={<Artist />} />
            <Route path="/user" element={<User />} />
            <Route path="/contact" element={<Contact />} />
          </Route>

          {/* Standalone routes (optional) */}
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
