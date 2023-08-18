import { getBillboard } from "@/actions/get-billboard"
import { getProducts } from "@/actions/get-products"
import Billboard from "@/components/billboard"
import ProductList from "@/components/product-list"

const HomePage = async () => {
  const products = await getProducts({isFeatured: true})
  const billboard = await getBillboard('03f17ea1-c94d-41f4-9104-6403cf4c215a')
  // console.log(products)
  return (
    <>
      <div className="container mx-auto space-y-10 pb-10">
        <Billboard data={billboard} />
        <div className="flex flex-col gap-y-8 p-4">
          <ProductList products={products} title="Productos destacados"/>
        </div>
      </div>
    </>
  )
}
export default HomePage