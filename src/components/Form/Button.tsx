import React from 'react'

export function Button ( { title }: any )
{
  return (
    <button className=" bg-blue w-full mt-2 p-5 border-none outline-none text-lg font-light text-white rounded-xl">{ title }</button>
  )
}
