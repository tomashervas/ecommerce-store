'use client'

import { cn } from "@/lib/utils"
import { Category } from "@/types"
import Link from "next/link"
import { useParams, usePathname } from "next/navigation"

interface MainNavProps {
  data: Category[]
}

const MainNav = ({data}: MainNavProps) => {

  const pathname = usePathname()

  const routes = data.map((route)=>({
    label: route.name,
    href: `/category/${route.id}`,
    active: pathname === `/category/${route.id}`
  }))

  return (
    <nav className={"flex items-center space-x-4 ml-4"}>
        {routes.map(route => (
            <Link key={route.label} href={route.href} className={cn("text-sm font-medium transition-colors hover:text-primary", route.active ? "text-black"  : "text-gray-500")}>
                {route.label}
            </Link>
        ))}
    </nav>
  )
}
export default MainNav