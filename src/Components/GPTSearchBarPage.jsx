import React from 'react'
import { SearchOutlined } from "@ant-design/icons";

const GPTSearchBarPage = () => {
  return (
    <div className='pt-[8%] flex justify-center'>
    <form className='w-1/2 flex items-center bg-white overflow-hidden rounded-full'>
        <input type="text" placeholder='what would you like to watch?' className='flex-grow border-none  outline-none py-4 px-5 text-black' />
        <button className = "bg-red-800  py-4 px-10 text-white" onClick={(e) => e.prevent.default}>Search</button>
      </form>
    </div>
  )
}

export default GPTSearchBarPage