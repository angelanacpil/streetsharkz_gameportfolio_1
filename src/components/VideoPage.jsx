import video from '/video.mp4'

const VideoPage = ({videoRef}) => {
  return (
    // Callback Ref - takes HTML dom element reference, updates ref
    <video className='h-[100vh] lg:h-auto lg:max-w-[100%] lg:translate-x-[-50%] lg:translate-y-[-50%]' ref={el => videoRef.current = el} muted> 
        <source src={video} type='video/mp4' />
        Your browser does not support the video tag.
    </video>
  )
}

export default VideoPage