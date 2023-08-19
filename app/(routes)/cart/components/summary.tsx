import Button from "@/components/ui/button"
import Currency from "@/components/ui/currency"
import useCart from "@/hooks/use-cart"
import axios from "axios"
import { useSearchParams } from "next/navigation"

const Summary = () => {

    const searchParams = useSearchParams()

    const {items, removeAll} = useCart()

    const totalPrice = items.reduce((total, item) => total + Number(item.price), 0)

    const onCheckout = async () => {
        const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/checkout`, {
            productsId: items.map(item => item.id)
        })

        window.location = response.data.url
    }

  return (
    <div className="mt-6 rounded-lg bg-gray-50 p-8 lg:col-span-4 lg:mt-0">
        <h2 className="text-lg font-medium ">Resumen del pedido:</h2>
        <div className="mt-6 space-y-4">
            <div className="flex justify-between border-t items-center py-4">
                <div className="text-base font-medium">
                    Total del pedido:
                </div>
                <Currency value={totalPrice} />
            </div>
        </div>
        <Button className="w-full mt-6 bg-neutral-800 text-white" onClick={onCheckout} >Pagar</Button>
    </div>
  )
}
export default Summary