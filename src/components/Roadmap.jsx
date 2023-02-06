import shuriken from '/shuriken.png'

const Roadmap = () => {
  return (
    <section className='p-4'>
        <h2 id="roadmap" className='text-center text-[3em] md:text-[5em] 2xl:text-[8em] font-bold'>Roadmap</h2>
        <img className='my-0 mx-auto p-2 lg:h-[500px] lg:w-[500px]' src={shuriken} />
    </section>
  )
}

export default Roadmap