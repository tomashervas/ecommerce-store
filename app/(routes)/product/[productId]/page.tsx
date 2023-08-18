import { getProduct } from "@/actions/get-product"
import { getProducts } from "@/actions/get-products"
import Gallery from "@/components/gallery"
import Info from "@/components/info"
import ProductList from "@/components/product-list"

interface ProductPageProps {
  params: {
    productId: string
  }
}

const ProductPage = async ({params}: ProductPageProps) => {

  const product = await getProduct(params.productId)

  const suggestedProducts = await getProducts({categoryId: product?.category?.id})



  return (
    <div className="container mx-auto space-y-10 p-4">
      <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
        <Gallery images={product?.images}/>
        <Info data={product}/>
       
      </div>
      <ProductList title="Productos sugeridos" products={suggestedProducts} />
    </div>
    
  )
}
export default ProductPage