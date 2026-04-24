import { Outlet } from "react-router-dom";
import { Sidebar } from "./Sidebar";
import { Footer } from "./Footer";
import { MobileTopBar } from "./MobileTopBar";

/* ============================================================
   LAYOUT — Sidebar bleue fixe à gauche + main scrollable.
   Sur mobile : top bar bleue + nav drawer.
   ============================================================ */

export const Layout = () => {
  return (
    <div className="min-h-screen flex">
      {/* Sidebar desktop — fixed left */}
      <Sidebar />

      {/* Colonne principale */}
      <div className="flex-1 flex flex-col lg:ml-[280px] min-w-0">
        {/* Mobile bar */}
        <MobileTopBar />

        <main className="flex-1 bg-surface">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
};
