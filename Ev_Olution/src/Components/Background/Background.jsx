import React from 'react';
import './Background.css';
import video from '../../Assets/video1.mp4';
import img1 from '../../Assets/image1.png';
import img2 from '../../Assets/image2.png';
import img3 from '../../Assets/image3.png';

const Background = ({ heroCount, playStatus }) => {
    {/* Render Video */ }
    if (playStatus) {
        return (<video className='background' src={video} autoPlay={playStatus} muted loop style={{ width: '100%' }} />)
    }

    return (
        <div>
            {/* Render Images */}
            {heroCount === 0 && <img className='background' src={img1} alt="Background 1" style={{ width: '100%' }} />}
            {heroCount === 1 && <img className='background' src={img2} alt="Background 2" style={{ width: '100%' }} />}
            {heroCount === 2 && <img className='background' src={img3} alt="Background 3" style={{ width: '100%' }} />}
        </div>
    );
}

export default Background;
