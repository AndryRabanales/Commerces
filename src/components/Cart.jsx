import { useCart } from '../store/cart'
import { formatMXN } from '../lib/money'
import { useState } from 'react'

export default function Cart() {
  const { items, inc, dec, remove, clear } = useCart()
  const [open, setOpen] = useState(false)
  const total = items.reduce((acc, i) => acc + i.price_cents * i.qty, 0)

  const checkout = async () => {
    const res = await fetch(import.meta.env.VITE_API_BASE + '/checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ items })
    })
    const data = await res.json()
    if (data.url) window.location.href = data.url
    else alert('No se pudo iniciar el pago')
  }

  return (
    <div>
      <button className="btn" onClick={() => setOpen(!open)}>🛒 Carrito ({items.reduce((a,i)=>a+i.qty,0)})</button>
      {open && (
        <div className="fixed inset-0 bg-black/30 z-50" onClick={()=>setOpen(false)}>
          <aside className="absolute right-0 top-0 h-full w-full max-w-md bg-white p-4 shadow-xl" onClick={e=>e.stopPropagation()}>
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-lg font-semibold">Tu carrito</h2>
              <button onClick={()=>setOpen(false)}>✕</button>
            </div>
            <div className="space-y-3 max-h-[70vh] overflow-auto">
              {items.length===0 && <p className="text-sm text-neutral-600">Vacío</p>}
              {items.map(i=> (
                <div key={i.id} className="flex gap-3 items-center">
                  <img src={i.image} className="w-16 h-16 object-cover rounded-lg" alt={i.title} />
                  <div className="flex-1">
                    <div className="text-sm font-medium line-clamp-1">{i.title}</div>
                    <div className="text-xs text-neutral-600">{formatMXN(i.price_cents)}</div>
                    <div className="flex items-center gap-2 mt-1">
                      <button className="px-2 py-1 border rounded" onClick={()=>dec(i.id)}>-</button>
                      <span className="text-sm">{i.qty}</span>
                      <button className="px-2 py-1 border rounded" onClick={()=>inc(i.id)}>+</button>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-semibold">{formatMXN(i.qty * i.price_cents)}</div>
                    <button className="text-xs text-red-600 mt-1" onClick={()=>remove(i.id)}>Eliminar</button>
                  </div>
                </div>
              ))}
            </div>
            <div className="border-t pt-3 mt-3 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm">Total</span>
                <span className="text-base font-semibold">{formatMXN(total)}</span>
              </div>
              <div className="flex gap-2">
                <button className="btn flex-1" onClick={clear}>Vaciar</button>
                <button className="btn btn-primary flex-1" onClick={checkout} disabled={items.length===0}>Pagar</button>
              </div>
            </div>
          </aside>
        </div>
      )}
    </div>
  )
}
