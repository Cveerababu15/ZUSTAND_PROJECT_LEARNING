import React, { useEffect } from 'react'
import { useAppStore } from '../store/useAppStore'
function Product() {
    const { products, cart, loading, error, fetchProducts, addToCart, removeFromCart } = useAppStore();

    // Fetch products on intila component mount

    useEffect(()=>{
        fetchProducts()
    },[fetchProducts])

    const totalPrice=cart.reduce((sum,item)=> sum + item.price * item.quantity,0)
    if (loading) return <p style={{ padding: '20px' }}>Loading products from API...</p>;
  if (error) return <p style={{ padding: '20px', color: 'red' }}>{error}</p>;
  return (
   <>
   <div style={{ padding: '2rem', borderBottom: '2px solid #e2e8f0' }}>
      <h3>🛍️ Product Catalog & Cart</h3>
      
      {/* Product List */}
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '1rem' }}>
        {products.map((product) => (
          <div key={product.id} style={{ border: '1px solid #cbd5e1', padding: '1rem', width: '200px', borderRadius: '8px' }}>
            <img src={product.image} alt={product.title} style={{ width: '100px', height: '100px', objectFit: 'contain', display: 'block', margin: '0 auto' }} />
            <h4 style={{ fontSize: '14px', height: '40px', overflow: 'hidden' }}>{product.title}</h4>
            <p style={{ fontWeight: 'bold' }}>${product.price}</p>
            <button 
              onClick={() => addToCart(product)}
              style={{ width: '100%', padding: '6px', backgroundColor: '#0284c7', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* Cart Summary */}
      <div style={{ marginTop: '2rem', padding: '1rem', backgroundColor: '#f1f5f9', borderRadius: '8px', color: '#000' }}>
        <h4>🛒 Shopping Cart ({cart.reduce((acc, item) => acc + item.quantity, 0)} items)</h4>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul>
            {cart.map((item) => (
              <li key={item.id} style={{ display: 'flex', justifyContent: 'space-between', margin: '8px 0' }}>
                <span>{item.title} (x{item.quantity}) - ${(item.price * item.quantity).toFixed(2)}</span>
                <button onClick={() => removeFromCart(item.id)} style={{ color: 'red', border: 'none', background: 'none', cursor: 'pointer' }}>Remove</button>
              </li>
            ))}
          </ul>
        )}
        <h4>Total: ${totalPrice.toFixed(2)}</h4>
      </div>
    </div>
   
   </>
  )
}

export default Product
