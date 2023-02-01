import { useState } from 'react'

const Menu = () => {
  const [showMenu, setShowMenu] = useState(false);
  
  return (
    <ul className={`mr-4 lg:mr-12 lg:py-4 float-right font-semibold ${!showMenu ? 'animate-ul' : ''}`}>
        <li style={{ backgroundColor: `rgba(0, 0, 0, 0.5)`}} className='p-1 lg:px-4 lg:py-2 border-4 border-rose-800 font-bold lg:text-2xl'><button onClick={() => setShowMenu(!showMenu)}>MENU</button></li>
        <li className='animate-li'><button onClick={() => document.querySelector('#home').scrollIntoView({  behavior: 'smooth' })}>HOME</button></li>
        <li className='animate-li'><button onClick={() => document.querySelector('#team').scrollIntoView({  behavior: 'smooth' })}>TEAM</button></li>
        <li className='animate-li'><button onClick={() => document.querySelector('#lore').scrollIntoView({  behavior: 'smooth' })}>LORE</button></li>
        <li className='animate-li'><button onClick={() => document.querySelector('#roadmap').scrollIntoView({  behavior: 'smooth' })}>ROAD MAP</button></li>
    </ul>
  )
}

export default Menu