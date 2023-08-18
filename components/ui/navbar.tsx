import Link from "next/link"
import MainNav from "./main-nav"
import { getCategories } from "@/actions/get-categories"
import Button from "./button"
import NavbarActions from "../navbar-actions"

const Navbar = async () => {

  const categories = await getCategories()

  return (
    <div className="border-b">
        <div className="relative flex justify-between items-center h-16 px-4">
            <Link href="/" className="ml-4" >
                <p className="text-xl font-bold">ECOMMERCE</p>
            </Link>
            <MainNav data={categories}/>
            <NavbarActions />
        </div>

    </div>
  )
}
export default Navbar