import { Billboard as BillboardType } from "@/types"
import React from "react"

interface BillboardProps {
    data: BillboardType
}

const Billboard: React.FC<BillboardProps> = ({data}) => {
  return (
    <div className=" p-4 rounded-xl overflow-hidden">
        <div className="relative rounded-xl aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover"
            style={{
                backgroundImage: `url(${data?.imgUrl})`
            }}
        >
            <div className="flex h-full w-full justify-center items-center">
                <h2 className="text-6xl font-bold text-slate-100">{data?.label}</h2>
            </div>
        </div>

    </div>
  )
}
export default Billboard