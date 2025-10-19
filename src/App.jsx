import { useEffect, useState } from 'react'
import Header from "./components/Header.jsx";
import ProductCard from './components/ProductCard'

export default function App() {
  const [products, setProducts] = useState([])
  useEffect(() => {
    import('./data/products.json').then(m => setProducts(m.default))
  }, [])

  return (
    <div className="space-y-6">
      <Header />
      <section className="container text-center space-y-2">
        <h1 className="text-3xl font-bold">Productos seleccionados</h1>
        <p className="text-neutral-600">Calidad, envío directo del proveedor</p>
      </section>
      <section className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {products.map(p => <ProductCard key={p.id} product={p} />)}
      </section>
    </div>
  )
}
