import logo_w from '/logo_w.png'

const Home = () => {
  return (
    <>
        <header id='home' className='h-[100vh] lg:h-[75%] w-100 mt-44 md:mt-32 xl:mt-0 font-semibold'>
            {/* Logo */}
            <img src={logo_w} className='logo-filter md:my-0 mx-auto min-h-[360px] min-w-[360px] lg:h-[640px] lg:w-[640px] 2xl:h-[900px] 2xl:w-[1000px]' />

            {/* Pulsing Title */}
            <h1 className='animate-pulse low-opacity-bg rounded-none cstm-text-shadow-red italic text-center font-semibold text-[1.7em] lg:text-[2em] 2xl:text-[3em]'>Street Sharkz Web 3</h1>
            
            {/* Description */}
            <p className='text-center p-8'>is a cutting-edge decentralized platform built on the Cardano blockchain.</p>
            <p className='p-4 lg:w-[50%] mx-auto'>It brings together the power of smart contracts and security of blockchain technology to create a new generation of online streetwear marketplaces.</p>
        </header>
    </>
  )
}

export default Home