import logo_w from '/logo_w.png'

const Home = () => {
  return (
    <>
        <header id='home' className='h-[100vh] lg:h-[70%] w-100 mt-48 lg:mt-0'>
            <img src={logo_w} className='logo-filter my-0 mx-auto h-[20rem] w-[26rem] lg:h-[900px] lg:w-[1000px]' />
            <h1 className='shadow my-0 mx-auto p-4 text-sm lg:p-0 lg:max-w-[140ch] font-semibold lg:text-base'>Street Sharkz Web 3 is a cutting-edge decentralized platform built on the Cardano blockchain. It brings together the power of smart contracts and security of blockchain technology to create a new generation of online streetwear marketplaces.</h1>
        </header>
        
        <section className='flex flex-col lg:flex-row justify-center items-center gap-4 lg:gap-8 p-4 lg:p-0'>
            <h2 className='lg:text-[12em] text-[5em] font-bold'>6000</h2>
            <h3 className='text-sm max-w-[75ch] p-4 font-semibold lg:text-base low-opacity-bg' >Sharks born from more than 250+ hand-drawn traits will be released to the NFT Community on Cardano. The sale will be split between the gold denticle, silver denticle, whitelist, and public sale. All Avatars.</h3>
        </section>
    </>
  )
}

export default Home