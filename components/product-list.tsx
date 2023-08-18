import { Product } from "@/types"
import NoResults from "./ui/no-results"
import ProductCard from "./ui/product-card"

interface ProductListProps {
    products: Product[]
    title: string
}

const ProductList = ({title, products}: ProductListProps) => {
  return (
    <>
        <h3 className="text-3xl font-bold">{title}</h3>
        {products.length == 0 && <NoResults />}
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
                // <div key={product.id}>{product.name}</div>
            ))}
        </div>
    </>
  )
}
export default ProductList