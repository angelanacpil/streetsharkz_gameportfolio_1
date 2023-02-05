import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { useRef } from 'react';

import './App.css'
import useScrollVideo from './hooks/useScrollVideo';
import Home from './components/Home'
import SubHeader from './components/SubHeader';
import Menu from './components/Menu';
import VideoPage from './components/VideoPage';
import Team from './components/Team';
import Sales from './components/Sales';
import Roadmap from './components/Roadmap';
import Lore from './components/Lore';
import Footer from './components/Footer';

function App() {
  const screenRef = useRef(null);
  const videoRef = useRef(null);

  const handleScroll = useScrollVideo(videoRef, screenRef);

  return (
    <main onScrollCapture={handleScroll}>
      <Parallax ref={screenRef} pages={8}>
        {/* Page 1 - Home */}
        <ParallaxLayer speed={1} factor={2} className='flex flex-col lg:gap-10 bg-cover bg-fixed bg-center bg-no-repeat bg-bg_logo'>
          <Home></Home>
          <SubHeader></SubHeader>
        </ParallaxLayer>

        {/* Page 2 - Sticky Menu */}
        <ParallaxLayer speed={0.5} sticky={{start: 0, end: 8}} className='w-[100%] h-[5rem]'>
          <Menu></Menu>
        </ParallaxLayer>

        {/* Page 3 - Video */}
        <ParallaxLayer offset={1} sticky={{start: 1, end: 8}} className='parallaxVid'>
          <VideoPage videoRef={videoRef}></VideoPage> 
        </ParallaxLayer>

        {/* Page 4 - Team */}
        <ParallaxLayer offset={2} className='flex flex-col gap-4 lg:gap-12 items-center'>
          <Team></Team>
        </ParallaxLayer>

        {/* Page 5 - Sale Phase */}
        <ParallaxLayer offset={4}>
          <Sales></Sales>
        </ParallaxLayer>

        {/* Page 6 - Road Map */}
        <ParallaxLayer offset={5}> 
          <Roadmap></Roadmap>
        </ParallaxLayer>

        {/* Page 7 - Lore */}
        <ParallaxLayer offset={6} className='z-50'>
          <Lore></Lore>
        </ParallaxLayer>

        {/* Page 8 - Footer */}
        <ParallaxLayer offset={7}>
          <Footer></Footer>
        </ParallaxLayer>
      </Parallax>
    </main>
  )
}

export default App
