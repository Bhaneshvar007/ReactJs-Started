import { useEffect, useState } from 'react'
import './App.css'
import Background from './Components/Background/Background'
import Hero from './Components/Hero/Hero';
import NavBar from './Components/NavBar/NavBar';

function App() {

  let heroData = [
    { text1: "Drive into", text2: "what you love" },
    { text1: "Indulge", text2: "your passions" },
    { text1: "Give in to", text2: "your passions" },
  ]
  const [heroCount, setHeroCount] = useState(1);
  const [playStatus, setPlayStatus] = useState(false);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setHeroCount((prevCount) => (prevCount === heroData.length - 1 ? 0 : prevCount + 1));
    }, 3000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, [heroData.length]);

  return (
    <div>
      <Background heroCount={heroCount} playStatus={playStatus} />
      <NavBar />
      <Hero
        setPlayStatus={setPlayStatus}
        heroData={heroData}
        heroCount={heroCount}
        setHeroCount={setHeroCount}
        playStatus={playStatus}
      />
    </div>
  )

}

export default App
