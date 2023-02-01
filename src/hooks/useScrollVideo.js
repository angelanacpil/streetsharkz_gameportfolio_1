import { useCallback, useEffect, useState } from 'react'

const useScrollVideo = (videoRef, screenRef) => {
    const [video, setVideo] = useState(videoRef); // Video
    const [screen, setScreen] = useState(screenRef); // Overall Distance from the top of the screen  
    const [y, setY] = useState(0); // For detecting scroll direction, compare with screen distance

    // Initialize Refs 
    useEffect(() => {
        setVideo(videoRef);
        setScreen(screenRef);
    }, [])

    // Handle Scroll Event 
    const handleScroll = useCallback(() => {
        // IF on page 2 onwards, listen to scroll for video control 
        if (screen.current.current >= 700) { // Parallax component's current screen value
            // Detect Scroll direction
            if (y > screen.current.current) { // Scroll Up - Rewind 
                video.current.currentTime -= 0.1;
            } 
            
            if (y < screen.current.current) { // Scroll Down - Play
                video.current.play();

                setTimeout(() => { // Delay
                    video.current.pause();  
                }, 500);
            }
        }

        setY(screen.current.current);
        
    }, [y]);

    return handleScroll;

    };

export default useScrollVideo