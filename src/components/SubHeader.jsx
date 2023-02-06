import React from 'react'

const SubHeader = () => {
  return (
    <section className='md:min-h-[700px] lg:min-h-[300px] 2xl:min-h-[20rem] flex flex-col lg:flex-row justify-center items-center lg:gap-8 p-4'>
        <h2 className='lg:text-[10em] text-[6em] font-bold'>6000</h2>

        <div className='low-opacity-bg font-semibold'>
        <p className='max-w-[75ch] p-4'>Sharks born from more than 250+ hand-drawn traits will be released to the NFT Community on Cardano.</p>
        <p className='max-w-[75ch] p-4' >The sale will be split between the gold denticle, silver denticle, whitelist, and public sale. All Avatars.</p>
        </div>
    </section>  
  )
}

export default SubHeader