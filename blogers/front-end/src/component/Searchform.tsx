import React from 'react'

const Searchform = () => {

  
  return <form action="">
    <div className='flex items-center min-w-[180px] md:min-w-[240px] relative'>
      <input className='flex-1 font-secondary text-sm text-slate-800 py-[.3rem] pl-3 pr-10 border-2 rounded-md outline-none' type="text" name="search" id="search" placeholder='Search...' />
      <button className='absolute top-1/2 right-4 bottom-0 -translate-y-1/2 w-[18px] h-[18px] rounded-full border-2 shadow-sm py-[.4rem]'></button>
    </div>
</form>
}

export default Searchform
 