"use client"

import { Product } from "@/types"
import Image from "next/image"
import IconButton from "./icon-button"
import { ExpandIcon, ShoppingBagIcon, ShoppingCartIcon } from "lucide-react"
import Currency from "./currency"
import { useRouter } from "next/navigation"
import UsePreviewModal from "@/hooks/use-preview-modal"
import { MouseEventHandler } from "react"
import useCart from "@/hooks/use-cart"

interface ProductCardProps {
    product: Product
}

const ProductCard: React.FC<ProductCardProps> = ({product}) => {

  const previewModal = UsePreviewModal()

  const cart = useCart()

  const router = useRouter()
  const handleClick = () => {
    router.push(`/product/${product.id}`)
  }

  const onPreview:MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation()
    previewModal.onOpen(product)
  }

  const onAddToCart:MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation()
    cart.addItem(product)
  }


  return (
    <div className="bg-white group cursor-pointer rounded-lg border" onClick={handleClick}>
        <div className="aspect-square rounded-tl-lg rounded-tr-lg overflow-hidden bg-gray-100 relative">
            <Image src={product.images[0].url} alt={`Imagen de ${product.name}`} fill className="object-cover" />
            {/* Image icon group */}
            <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5 flex justify-center space-x-2">
              <div className="flex justify-center">
                <IconButton icon={<ExpandIcon size={20} className="text-gray-600"/>} onClick={onPreview} />
              </div>
              <div className="flex gap-x-6 justify-center">
                <IconButton icon={<ShoppingCartIcon size={20} className="text-gray-600"/>} onClick={onAddToCart} />
              </div>
            </div>
        </div>
      {/* Description */}
        <div className="p-2">
          <h2 className="text-xl font-semibold">{product.name}</h2>
          <p className="text-sm text-gray-500">{product.category.name}</p>
        </div>

        {/* Price */}
        <div className="flex justify-between items-center p-2 pt-0">
          <Currency value={product.price} />
        </div>
    </div>
  )
}
export default ProductCard