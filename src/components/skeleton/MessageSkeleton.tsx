import React from 'react'

function MessageSkeleton ()
{
    return (

        <div role="status" className="animate-pulse ">
            <div className="flex ">
                <svg className="mr-2 w-10 h-10 text-gray-200 dark:text-[#292828]" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd"></path></svg>
                <div>
                    <div className="w-[250px] h-8 bg-[#292828] -200 rounded-full mb-4 dark:bg-[#292828]  mr-3"></div>
                    <div className="w-28 h-8 bg-[#292828] -200 rounded-full dark:bg-[#292828] "></div>
                </div>
            </div>

            <span className="sr-only">Loading...</span>
        </div>

    )
}

export default MessageSkeleton