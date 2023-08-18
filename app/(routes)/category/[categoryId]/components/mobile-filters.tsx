"use client"

import Button from "@/components/ui/button"
import IconButton from "@/components/ui/icon-button"
import { Color, Size } from "@/types"
import { Dialog } from "@headlessui/react"
import { PlusIcon, XIcon } from "lucide-react"
import { useState } from "react"
import Filter from "./filter"

interface MobileFilttersProps {
    sizes: Size[]
    colors: Color[]
}

const MobileFilters = ({sizes, colors}: MobileFilttersProps) => {
    const [open, setOpen] = useState(false)



  return (
    <div>
        <Button onClick={() => setOpen(!open)} className="flex items-center gap-x-2 rounded-md">Filtros <PlusIcon size={20}/> </Button>
        <Dialog as="div" className={"relative z-40 lg:hidden"} open={open} onClose={() => setOpen(false)} >
           <div className="fixed inset-0 bg-black opacity-30"/>
           <div className="fixed inset-0 z-40 flex">
            <Dialog.Panel className={"ml-auto relative flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 px-4 text-left shadow-xl"}>
                <div className="flex items-center justify-end px-4">
                    <IconButton icon={<XIcon size={15} />} onClick={() => setOpen(false)}/>
                </div>
                <div className="p-4">
                    <Filter name="Tallas" valueKey="sizeId" data={sizes}/>
                    <Filter name="Colores" valueKey="colorId" data={colors}/>
                </div>
            </Dialog.Panel>

           </div>
        </Dialog>
    </div>
  )
}
export default MobileFilters