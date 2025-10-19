// src/components/Header.jsx
import Cart from "./Cart.jsx";

export default function Header() {
  return (
    <header className="border-b bg-white/10 backdrop-blur sticky top-0 z-50">
      <div className="container flex items-center justify-between py-3">
        <div className="flex items-center gap-2">
          {/* LOGO de Vite para reemplazar el div negro */}
          <img src="/icon.png" alt="Mistery Box Logo" className="h-8 w-8" /> 
          {/* Título de la tienda cambiado a "Mistery Box" */}
          <span className="font-semibold">Mistery Box</span>
        </div>
        <Cart />
      </div>
    </header>
  );
}