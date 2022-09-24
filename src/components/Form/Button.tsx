import React from 'react'

export function Button ( { title, type, ...props }: any )
{
  return (
    <button { ...props } type={ type } className=" bg-blue w-full mt-2 p-5 font-semibold border-none outline-none text-lg text-white rounded-xl hover:opacity-80 ease-in duration-300">{ title }</button>
  )
}
