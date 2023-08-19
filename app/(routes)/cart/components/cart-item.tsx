"use client"

import Currency from "@/components/ui/currency"
import IconButton from "@/components/ui/icon-button"
import useCart from "@/hooks/use-cart"
import { Product } from "@/types"
import { XIcon } from "lucide-react"
import Image from "next/image"

interface cartItemProps {
    data: Product
}

const CartItem = ({data}: cartItemProps) => {

    const cart = useCart()

    const onRemoveItem = () => {
        cart.removeItem(data.id)
    }

  return (
    <li className="flex items-center py-4 border-b ">
        <div className="relative w-20 h-20 rounded-md overflow-hidden sm:w-36 sm:h-36">
            <Image src={data.images[0].url} alt={`Imagen de ${data.name}`} fill className="object-cover" />
        </div>
        <div className="relative ml-4 flex flex-1 flex-col justify-between">
            <div className="absolute z-10 right-0 top-0">
                <IconButton icon={<XIcon size={20}/>} onClick={onRemoveItem} />
            </div>
            <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                <div className="flex justify-between">
                    <p className="text-lg font-semibold">
                        {data.name}
                    </p>
                </div>
                <div className="mt-2 flex text-sm">
                    <p className="text-gray-500">{data.color.name}</p>
                    <p className="text-gray-500 ml-4 border-l border-gray-300 pl-4">{data.size.name}</p>
                </div>
                <Currency value={data.price} />

            </div>
        </div>
    </li>
  )
}
export default CartItem