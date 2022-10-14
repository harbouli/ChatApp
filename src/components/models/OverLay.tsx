import React, { FC } from 'react'



type Props = {
    toggleModel: () => void;
}
const OverLay: FC<Props> = ( { toggleModel } ) =>
{
    return (
        <div onClick={ toggleModel } className='flex justify-center z-20 items-center fixed bg-[#000000b6] w-screen h-screen '></div>
    )
}

export default OverLay