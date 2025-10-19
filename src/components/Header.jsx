// src/components/Header.jsx
import Cart from "./Cart.jsx"; // si aún no tienes Cart, quita esta línea y su uso

export default function Header() {
  return (
    <header className="border-b bg-white/10 backdrop-blur sticky top-0 z-50">
      <div className="container flex items-center justify-between py-3">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-black" />
          <span className="font-semibold">TuTienda</span>
        </div>
        <Cart />
      </div>
    </header>
  );
}
