"use client"

import useCart from "@/hooks/use-cart"
import CartItem from "./components/cart-item"
import Summary from "./components/summary"

const CartPage = () => {

    const cart = useCart()

  return (
    <div className="container mx-auto p-6">
        <h1 className="text-2xl font-semibold ">Cesta:</h1>
        <div className="mt-6 lg:grid lg:grid-cols-12">
            <div className="lg:col-span-8">
                {cart.items.length == 0 && <p className="text-neutral-500">No hay productos en tu cesta</p>}
                <ul>
                    {cart.items.map((item) => (
                        <CartItem key={item.id} data={item} />
                    ))}    
                </ul> 
            </div>
            <Summary />
        </div>

    </div>
  )
}
export default CartPage