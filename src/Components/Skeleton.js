import React from 'react'
import icon from '../Images/105-loader.webp'

const Skeleton = () => {
    return (
        <tr className="text-center w-full text-lg text-indigo-500">
            <td colSpan={5} className="p-20">
                <div className="flex justify-center items-center text-3xl">
                    <h1 className="px-1 pt-2 font-bold tracking-widest">Loading</h1>
                    <img src={icon} alt="loader" className="w-20 pb-2"/>
                </div>
            </td>
        </tr>
    )
}

export default Skeleton