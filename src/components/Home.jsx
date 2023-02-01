import logo_w from '/logo_w.png'

const Home = () => {
  return (
    <>
        <header id='home' className='h-[100vh] lg:h-[75%] w-100 mt-56 lg:mt-0 font-semibold'>
            <img src={logo_w} className='logo-filter my-0 mx-auto h-[20rem] w-[26rem] lg:h-[900px] lg:w-[1000px]' />
            <h1 className='animate-pulse low-opacity-bg rounded-none cstm-text-shadow-red italic text-center font-semibold text-[1.7em] lg:text-[3em]'>Street Sharkz Web 3</h1>
            <p className='text-center p-8'>is a cutting-edge decentralized platform built on the Cardano blockchain.</p>
            <p className='p-4 lg:w-[50%] mx-auto'>It brings together the power of smart contracts and security of blockchain technology to create a new generation of online streetwear marketplaces.</p>
        </header>
        
        <section className='flex flex-col lg:flex-row justify-center items-center lg:gap-8 p-4'>
            <h2 className='lg:text-[12em] text-[6em] font-bold'>6000</h2>

            <div className='low-opacity-bg font-semibold'>
              <p className='max-w-[75ch] p-4'>Sharks born from more than 250+ hand-drawn traits will be released to the NFT Community on Cardano.</p>
              <p className='max-w-[75ch] p-4' >The sale will be split between the gold denticle, silver denticle, whitelist, and public sale. All Avatars.</p>
            </div>
        </section>
    </>
  )
}

export default Home