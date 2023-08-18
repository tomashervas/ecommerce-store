"use client"

import { Image as ImageType } from "@/types"
import { Tab } from "@headlessui/react"
import GallertyTab from "./gallery-tab"
import Image from "next/image"

interface ImageProps {
    images: ImageType[]
}

const Gallery = ({images}: ImageProps) => {
  return (
    <Tab.Group as="div" className="flex flex-col-reverse">
        <div className="hidden mx-auto max-w-2xl w-full mt-6 sm:block lg:max-w-none">
            <Tab.List className={"grid grid-cols-4 gap-6"}>
                {images.map((image) => (
                    <GallertyTab key={image.id} image={image} />
                ))}
            </Tab.List>
        </div>
        <Tab.Panels className={"aspect-square w-full overflow-hidden"} >
            {images.map((image) => (
                <Tab.Panel key={image.id}>
                    <div className="aspect-square rounded-lg relative h-full w-full overflow-hidden">
                        <Image src={image.url} alt={image.url} fill className="object-cover object-center" />
                    </div>
                </Tab.Panel>
            ))}
        </Tab.Panels>
    </Tab.Group>
  )
}
export default Gallery