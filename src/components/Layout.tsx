import { Outlet } from "react-router-dom";
import { Footer } from "./Footer";
import { Header } from "./Header";

/* ============================================================
   LAYOUT — Sidebar bleue fixe à gauche + main scrollable.
   Sur mobile : top bar bleue + nav drawer.
   ============================================================ */

export const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-surface">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
