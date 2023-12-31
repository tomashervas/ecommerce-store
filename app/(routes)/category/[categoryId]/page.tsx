import { getCategory } from "@/actions/get-category"
import { getColors } from "@/actions/get-colors"
import { getProducts } from "@/actions/get-products"
import { getSizes } from "@/actions/get-sizes"
import Billboard from "@/components/billboard"
import Filter from "./components/filter"
import NoResults from "@/components/ui/no-results"
import ProductCard from "@/components/ui/product-card"
import MobileFilters from "./components/mobile-filters"

export const revalidate = 0

interface CategoryPageProps {
    params: {
        categoryId: string
    }
    searchParams: {
        colorId: string
        sizeId: string
    }
}

const CategoryPage = async ({params, searchParams}: CategoryPageProps) => {

    const products = await getProducts({
        categoryId: params.categoryId,
        colorId: searchParams.colorId,
        sizeId: searchParams.sizeId
    })

    const sizes = await getSizes()
    const colors = await getColors()
    const category = await getCategory(params.categoryId)


  return (
    <div className="container mx-auto space-y-10">
        <Billboard data={category.billboard} />
        <div className="p-4 space-y-4 lg:grid lg:grid-cols-5 lg:gap-x-8">
            <div className="lg:hidden">
                <MobileFilters sizes={sizes} colors={colors} />
            </div>
            <div className="hidden lg:block">
                <Filter name="Tallas" valueKey="sizeId" data={sizes}/>
                <Filter name="Colores" valueKey="colorId" data={colors}/>
            </div>
            <div className="lg:col-span-4">
                {products.length == 0 && <NoResults />}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </div>

    </div>
  )
}
export default CategoryPage