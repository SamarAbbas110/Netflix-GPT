import React from 'react'
import lang from "../Utils/Languages.js"
import {useSelector } from "react-redux";


const GPTSearchBarPage = () => {
  const Langchange = useSelector((store) => store.config.lang); 
  return (
    <div className='pt-[8%] flex justify-center'>
    <form className='w-1/2 flex items-center bg-white overflow-hidden rounded-full'>
        <input type="text" placeholder={lang[Langchange].getSearchPlaceHolder} className='flex-grow border-none  outline-none py-4 px-5 text-black' />
        <button className = "bg-red-800  py-4 px-10 text-white">{lang[Langchange].Search}</button>
      </form>
    </div>
  )
}

export default GPTSearchBarPage