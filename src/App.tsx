import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Layout } from "@/components/Layout";
import Index from "./pages/Index.tsx";
import Prix from "./pages/Prix.tsx";
import Avis from "./pages/Avis.tsx";
import APropos from "./pages/APropos.tsx";
import Contact from "./pages/Contact.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

/* ============================================================
   ROUTING — Najma Coiffure
   Toutes les pages sont enveloppées dans <Layout/> qui inclut
   la nav et le footer. Pour ajouter une page : créer le fichier
   dans /pages, ajouter une route ici et un lien dans Navigation.
   ============================================================ */
const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <HashRouter basename={import.meta.env.BASE_URL}>
        <Routes>
          {/* Routes principales avec layout commun */}
          <Route element={<Layout />}>
            <Route path="/" element={<Index />} />
            <Route path="/prix" element={<Prix />} />
            <Route path="/avis" element={<Avis />} />
            <Route path="/a-propos" element={<APropos />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
          {/* Route 404 (catch-all, doit rester en dernier) */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
