import backgroundimg from '../../assets/images/background.png';
import Carousel from '../../components/Carousel';

const JourneyPage: React.FC = () => {
    return (
        <div>
            <img src={backgroundimg} alt="Background" className="fixed inset-0 object-cover object-left w-full h-full -z-10 blur scale-105" />

            <div className="mt-12 w-full justify-center bg-amber-50 pb-16">
                <div className="max-w-6xl items-center mx-auto lg:py-0 py-12">
                    <div className='lg:py-12 px-4 lg:px-0'>
                        <h1 className="text-7xl font-[Josefin_sans] mb-2">My Journey</h1>
                        <p className="text-2xl text-gray-500 font-[IBM_Plex_Serif] italic mb-4">From curiosity to expertise: charting my path in tech.</p>
                        <p className="max-w-4xl text-md text-gray-600 mb-8">
                            Ever since I was a child I have loved creating things, I’ve been into painting, origami, chrocheting, sculpting and sewing. I particularly remember staying up late at night as a child hand-sewing my own stuffsies. My first ever “website” I created when I was 8 was a site for selling my hand-crafted 3D pearl-animals.
                        </p>
                        <p className="max-w-4xl text-md text-gray-600 mb-8">
                            Another thing I’ve also always loved doing is problem solving, whether it was math, figuring out how to write the perfect essay or trying to avoid getting caught staying up late, I never backed down from a challenge. This is probably a reason why I found programming to be so rewarding, since it is all about problem solving. Combine that with web, UX and game design and you could say I had found my passion, Full stack development! 
                        </p>
                        <p className="max-w-4xl text-md text-gray-600 mb-8">
                            Although I do love programming my interest for it didn’t start until late in high school where I took my first programming course. I really liked it and even based my high school-thesis around it creating a prototype of my very first game, Wolfsbane. I like it so much that I then applied to software engineering at Chalmers, a University halfway across Sweden. Living on my own for the first time, not knowing anyone, I was really nervous and excited the first day at campus. Luckily, I found a home there, I made the most awesome friends and joined a bunch committees and associations. It was honestly some of the best years of my life, yet! I still remember the chaos in the kitchen when making dinner for our board game nights, the smell of newbaked scones from our sunday morning workshops and the sound of laughter late at night after everyone was too tired to go home after a meeting.
                        </p>
                        <h2 className='justify-center text-2xl text-gray-500 font-[IBM_Plex_Serif] italic mb-4'> My time at Chalmers</h2>

                        <Carousel />

                        <p className="max-w-4xl text-md text-gray-600 mb-8">
                            After graduating with a bachelors in software engineering, a master in interaction design and a master in engineering specialicing in software engineering (civilingenjörsexamen, in swedish) I’m now working as a fullstack developer, working with both backend and frontend. But my learning journey doesn’t stop there, I constantly strive to evolve and learn new concepts techniques and frameworks, and as said, I never back down from a challenge!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JourneyPage;