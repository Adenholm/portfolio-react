import background1 from '../assets/images/backgorund-layers/background-1.png';
import background2 from '../assets/images/backgorund-layers/background-2.png';
import background3 from '../assets/images/backgorund-layers/background-3.png';
import background4 from '../assets/images/backgorund-layers/background-4.png';
import background5 from '../assets/images/backgorund-layers/background-5.png';
import background6 from '../assets/images/backgorund-layers/background-6.png';

const ScrollingBg = () => {
  const backgrounds = [
    { src: background1, speed: 120 },
    { src: background2, speed: 90 },
    { src: background3, speed: 60 },
    { src: background4, speed: 40 },
    { src: background5, speed: 30 },
    { src: background6, speed: 20 },
  ];

  return (
    <>
      {backgrounds.map((bg, index) => (
        <div
          className="scroll-container h-screen fixed top-0 left-0 w-full z-[-1]"
          style={{ zIndex: index - 10 }}
          key={index}
        >
          <div
            className="scroll-content"
            style={{
              animation: `scroll ${bg.speed}s linear infinite`,
            }}
          >
            <img src={bg.src} alt={`background-${index}`} className="h-screen lg:w-auto md:blur-none md:scale-100 blur-sm scale-105 block" />
            <img src={bg.src} alt={`background-${index}`} className="h-screen lg:w-auto md:blur-none md:scale-100 blur-sm scale-105 block" />
          </div>
        </div>
      ))}
    </>
  );
};

export default ScrollingBg;
