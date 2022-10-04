import React from 'react'
interface ChanneIteam
{
    name: string,
    lastMessage: string
    id: number

}

function ChanneIteam ( { iteam }: any )
{
    return (
        <div className=" flex items-center py-4 px-3 gap-5 bg-DARK hover:bg-[#3d3d3d67] border-b-[#96969632] border-solid border-b-[1px]">
            <div className=" w-8 h-8 bg-blue rounded-full " />
            <div>
                <p className="font-semibold">{ iteam.name }</p>
                <p className=" text-xs opacity-75">{ iteam.lastMessage }</p>
            </div>
        </div>
    )
}

export default ChanneIteam