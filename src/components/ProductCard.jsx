import { useCart } from '../store/cart'
import { formatMXN } from "../lib/money";

export default function ProductCard({ product }) {
  const add = useCart(s => s.add)
  return (
    <div className="card overflow-hidden">
      <img src={product.image} alt={product.title} className="w-full h-56 object-cover" />
      <div className="p-4 space-y-2">
        <h3 className="font-semibold line-clamp-2 min-h-[3.5rem]">{product.title}</h3>
        <p className="text-sm text-neutral-600 line-clamp-2">{product.description}</p>
        <div className="flex items-center justify-between pt-2">
          <span className="font-semibold">{formatMXN(product.price_cents)}</span>
          <button className="btn btn-primary" onClick={() => add(product)}>Agregar</button>
        </div>
      </div>
    </div>
  )
}
