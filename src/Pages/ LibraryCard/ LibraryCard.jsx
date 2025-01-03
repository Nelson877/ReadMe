import React, { useEffect, useState } from 'react'
import Loading from '../../Components/Loading/Loading';
import LibraryImage from '../../assets/images/librarycard.webp'

const  LibraryCard = () => {
const [isLoading, setIsLoading] = useState(true);


useEffect(() =>{
   const timer = setTimeout(() =>{
    setIsLoading(false);
   }, 2000)

   return () => clearTimeout(timer)
}, [])

if(isLoading){
    return <Loading/>
}


  return (
    <div className='min-h-screen bg-white flex'>
         <div className='flex-1 max-w-5xl mx-auto grid md:grid-cols-2 items-center gap-16 p-8'>
           <div className='space-y-8 max-w-md'>
             <div className='space-y-3'>
               <h1 className='text-3xl md:text-4xl font-semibold text-slate-800 leading-tight'>
                 Welcome, Your reading journey starts now
               </h1>
               <p className='text-slate-600 text-lg'>
                 Library ID to continue your learning adventure
               </p>
             </div>
   
             <form className='space-y-6'>
               <div className='space-y-4'>
                 <div>
                   <label className='text-sm font-medium text-slate-600'>
                     Library ID
                   </label>
                   <input
                     type='text'
                     placeholder='Enter your library ID'
                     className='w-full mt-2 p-3 border-b-2 border-slate-200 focus:border-orange-500 outline-none text-slate-800 transition-colors'
                   />
                 </div>
   
                
               </div>
   
               <button className='w-full p-4 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors font-medium'>
                 Login
               </button>
   
             
   
             
   
               <div className='text-center space-y-3'>
            
                 <div className='text-slate-600'>
                   Don't having a library ID?{" "}
                   <a
                     href='/get-library-id-now'
                     className='text-orange-500 hover:text-orange-400 font-medium'
                   >
                     Get library ID now
                   </a>
                 </div>
               </div>
             </form>
           </div>
   
           <div className='hidden md:block'>
             <img
               src={LibraryImage}
               alt='Library illustration'
               className='w-full max-w-lg mx-auto'
             />
           </div>
         </div>
       </div>
  )
}

export default  LibraryCard
