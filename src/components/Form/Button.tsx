import React from 'react'

export function Button ( { title }: any )
{
  return (
    <button className=" bg-blue w-full mt-2 p-5 font-black border-none outline-none text-lg text-white rounded-xl hover:opacity-80 ease-in duration-300">{ title }</button>
  )
}
