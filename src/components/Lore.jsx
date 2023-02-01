import { useState, useEffect } from "react"
import lore_items from "../assets/lore_items"
import l_arrow from '/l_arrow.png'
import r_arrow from '/r_arrow.png'

const Lore = () => {
    const [currentItem, setCurrentItem] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(4);
    const [carouselMoved, setCarouselMoved] = useState(false);
    const [currentLore, setCurrentLore] = useState(lore_items.slice(0, itemsPerPage));

    // Slice lore array depending on currentItem value 
    useEffect(() => {
        const remainder = currentItem % itemsPerPage; 
    
        if (remainder === 0) {
          setCurrentLore(lore_items.slice(currentItem, currentItem + itemsPerPage));
        }
    
        if (currentItem < itemsPerPage) {
          setCurrentLore(lore_items.slice(0, itemsPerPage));
        }
    }, [currentItem])

    // Carousel Events 
    const nextCarousel = () => {
        if (currentItem + 1 === lore_items.length) return;
        setCurrentItem((currentItem + 1) % lore_items.length);
    
        setCarouselMoved(true);
    
        setTimeout(() => {
          setCarouselMoved(false);
        }, 300);
    }
    
    const prevCarousel = () => {
        if (currentItem === 0) return;
        setCurrentItem((currentItem - 1 + lore_items.length) % lore_items.length);
      
        setCarouselMoved(true);
    
        setTimeout(() => {
          setCarouselMoved(false);
        }, 300);
    }
    
    // Character Selection Thumbnails 
    const selectCharacter = (evt, i) => {
        setCurrentItem(i);
        setCarouselMoved(true);
    
        setTimeout(() => {
          setCarouselMoved(false);
        }, 300);
    }

    return (
        <>
            <h2 id="lore" className='text-[5em] lg:text-[8em] font-bold'>Lore</h2>

            {/* Container */}
            <section className='my-8 mx-auto flex flex-col items-center gap-4 shadow py-2 lg:py-28' style={{ backgroundColor: `rgba(0, 0, 0, 0.5)` }}>
                {/* Character Selection */}
                <div className=' px-3 py-2 flex rounded lg:min-w-[20rem]'> 
                    {currentLore.map((lore, i) => {
                    return <>
                        {/* Character Selection Buttons */}
                        <button onClick={evt => selectCharacter(evt, (lore.id - 1))}>
                        <img src={lore.img} 
                        className={`mx-4 rounded shadow h-[5rem] object-center character-button 
                            ${carouselMoved ? 'character-button_parent' : ''}
                            ${currentItem === (lore.id - 1) ? 'opacity-50' : 'opacity-100'}`} />
                        </button>
                    </>
                    })}
            </div>

                {lore_items.map((lore, i) => {
                return <>
                    <div key={i} className={`${carouselMoved ? 'animate-parent' : ''} px-8 lg:px-[20rem] py-[5rem] gap-4 lg:h-[60vh] 
                    ${currentItem === i ? 'flex flex-col lg:flex-row items-center' : 'hidden'}`}
                    >
                    {/* Image */}
                    <img className={`character-thumbnail animate-child object-contain w-full h-96 diagonal border-double border-red-400 border-2
                        lg:h-[28rem] lg:w-[28rem]`} src={lore.img} />

                    <div className='p-4 flex flex-col'>
                        {/* Carousel Buttons */}
                        <div className='flex justify-evenly items-center mb-4 lg:justify-start lg:gap-16'>
                        <button onClick={prevCarousel}>
                            <img src={l_arrow} className='arrow'/>
                        </button>

                        <button onClick={nextCarousel}>
                            <img src={r_arrow} className='arrow'/>
                        </button>
                        </div>
                        
                        {/* Details */}
                        <div className={`${carouselMoved ? 'animate-parent' : ''}`}>
                        <h5 className={`text-center lg:text-left my-4 text-3xl font-bold :text-white
                            animate-child`}>{lore.name}</h5>
                        <p className={`normal-case text-center lg:text-left mb-3 text-gray-400 text-sm lg:text-lg
                            animate-child`}>{lore.description}</p>
                        </div>
                    </div>
                    </div>
                </>
                })}
            </section>
        </>
    )
    }

export default Lore