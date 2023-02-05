import shuriken from '/shuriken.png'

const Team = () => {
  return (
    <>
    <h2 id='team' className='text-[5em] 2xl:text-[8em] font-bold'>Team</h2>

      <section className='my-0 mx-auto 2xl:ml-[10rem] flex flex-col max-w-sm items-center p-4 bg-black rounded-lg shadow lg:flex-row lg:max-w-[60rem]'>
        <img className="object-cover rounded-lg h-96 lg:mr-4 p-2
        lg:h-[28rem] lg:w-[28rem]" src={shuriken} />
        
        <div className="flex flex-col justify-between p-4 w-full">
          <h3 className="text-left mb-2 text-2xl font-bold :text-white">Founder</h3>

          <p className="normal-case text-left mb-3 text-gray-400 text-sm lg:text-md 2xl:text-lg">Massimo is an Australian resident who lives in Melbourne and has worked in Web3 full time as a trader and investor for 3+ years. He started off trading NFTs on the Cardano blockchain but has traded on Ethereum as well, not to mention trading charts and learning technical analysis the whole time.</p>
          <p className='normal-case text-left mb-3 text-gray-400 text-sm lg:text-md 2xl:text-lg'>Throughout years of trading and buying NFTs Massimo has figured out what a project should and shouldn't do, this is when it comes to launch, marketing, and art. Quality over everything. The Collector's Club is Massimo's culmination of 6 months of hard work, years of research and trading, art development and passion. He is proud to be launching in his hometown, Cardano.</p>
        </div>
      </section>

      <section className='mx-0 my-auto 2xl:ml-[25rem] flex flex-col max-w-sm items-center p-4 bg-black rounded-lg shadow lg:flex-row-reverse lg:max-w-[60rem]'>
        <img className="object-cover w-full rounded-lg h-96 lg:ml-4 p-2
        lg:h-[28rem] lg:w-[28rem]" src={shuriken} />
        
        <div className="flex flex-col justify-between p-4 w-full">
          <h3 className="text-left mb-2 text-2xl font-bold :text-white">Artist</h3>

          <p className="normal-case text-left mb-3 text-gray-400 text-sm lg:text-md 2xl:text-lg">Massimo is an Australian resident who lives in Melbourne and has worked in Web3 full time as a trader and investor for 3+ years. He started off trading NFTs on the Cardano blockchain but has traded on Ethereum as well, not to mention trading charts and learning technical analysis the whole time.</p>
        </div>
      </section>
    </>
  )
}

export default Team