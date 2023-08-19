import { Product } from "@/types"
import { toast } from "react-hot-toast"
import { create } from "zustand"
import { createJSONStorage, persist } from "zustand/middleware"

interface CartStore {
    items: Product[]
    addItem: (data:Product)=> void
    removeItem: (id:string) => void
    removeAll: () => void
}

const useCart = create(
    persist<CartStore>((set, get)=>({
        items: [],
        addItem: (data:Product)=>{
            const {items} = get()
            const existingItem = items.find(item => item.id === data.id)
            if(existingItem) return toast("Ya estaba en la cesta")
            set({items: [...items, data]})
            toast.success("Producto añadido a la cesta")

        },
        removeItem: (id:string) => {
            set({items: get().items.filter(item => item.id !== id)})
            toast.success("Producto eliminado de la cesta")
        },
        removeAll: () => set({items: []})
    }), {
        name: "cart",
        storage: createJSONStorage(() => localStorage)
    })
)

export default useCart