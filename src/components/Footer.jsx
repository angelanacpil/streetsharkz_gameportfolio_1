import logo_w from '/logo_w.png'

const Footer = () => {
  return (
    <footer>
        <div className='bg-rose-800 mx-auto absolute bottom-0 w-[100vw] p-6'>
          <img src={logo_w} className='my-0 mx-auto h-[10rem] w-[10rem] lg:h-[15rem] lg:w-[15rem]'/>
          <span className='text-center font-semibold'> <small>&copy; Copyright 2023, StreetSharkz. All Rights Reserved</small> </span> 
        </div>
    </footer>
  )
}

export default Footer