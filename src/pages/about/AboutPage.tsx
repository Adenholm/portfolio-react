import { Link } from 'react-router-dom';
import LeafUnderline from '../../assets/icons/leaf';
import backgroundimg from '../../assets/images/background.png';
import AnimatedPath from '../../components/AnimatedPath';
import ArrowIcon from '../../assets/icons/arrow';
import portraitimg from '../../assets/images/portrait.jpg';
import examenimg from '../../assets/images/examensbild.jpg';


const AboutPage: React.FC = () => {

    const facts = [
        { label: "Where do I live?", value: "Gothenburg - sweden, moved here from Ronneby for my studies " },
        { label: "What's my Education?", value: "Bachelor of Software engineering at Chalmers, Master of Interaction Design at Chalmers and  Master of Engineering (software engineering) at Chalmers" },
        { label: "What are my Specialities?", value: "Has experience across the stack with backend technologies such as  Java Spring Boot, Entity Framework, Azure, Docker, Relational databases and github workflows and Frontend technologies such as React, Angular, CSS, Javascript, Typescript and Figma. I am very flexible  and love to learn new frameworks and technologies." },
        { label: "Do I have any Hobbies?", value: "Yes, I have many, for example, Sketching, painting, crocheting, horseback-riding, longboarding, Aikido and gaming." },
        { label: "What are my Favourite Movies?", value: "I am a big fan of all things studio Ghibli, especially Howl’s moving castle and Nausicää. " },
        { label: "What are my Favourite Games?", value: "Zelda Breath of the Wild, Subnautica, A short hike" },
        { label: "What are my Favourite Series?", value: "Violet Evergarden and Natsume’s book of friends." },
        { label: "What inspires me?", value: "Nature, cozy atmospheres, warm color palettes and intricate details." },
    ];

    return (
        <div>
            <img src={backgroundimg} alt="Background" className="fixed inset-0 object-cover object-left w-full h-full -z-10 blur scale-105" />

            <div className="mt-12 w-full justify-center bg-amber-50 pb-16">
                <div className="max-w-6xl gap-8 items-center flex flex-col lg:flex-row mx-auto lg:py-0 py-12 h-110">
                    <div className='lg:py-12 px-4 lg:px-0'>
                        <h1 className="text-7xl font-[Josefin_sans] mb-2">About me</h1>
                        <p className="text-2xl text-gray-500 font-[IBM_Plex_Serif] italic mb-4">I’m a software engineer with a passion for designing engaging user experiences.</p>
                        <p className="max-w-4xl text-md text-gray-600">
                        I love working throughout the stack both frontend and backend finding creative solutions for complex problems. I also have an interest for game design and illustration, so when I’m not developing you can often find me drawing or playing the latest cozy games.
                        </p>
                    
                    </div>
                    <img src={portraitimg} alt="portrait" className="lg:max-w-120" />
                </div>

                <AnimatedPath color='#9c9050d2' size={1300} duration={2} strokeWidth={0.75} className='md:mx-[-5%] mt-[-10%] w-full rotate-180 scale-x-[-1] z-[-1]'/>

                <div className="max-w-4xl gap-8 flex flex-col mx-auto lg:py-0 py-12 px-4 ">
                    <h1 className="text-5xl font-[Josefin_sans] mb-2">Quick Facts</h1>
                    {facts.map((fact, index) => (
                        <div key={index} className="mb-0">
                            <h2 className="text-lg font-[Josefin_sans]">{fact.label}</h2>
                            <p className="text-gray-600">{fact.value}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className='flex w-fill justify-center md:p-24 p-8 flex-col gap-8 items-center bg-linear-to-t to-amber-50 from-10+'></div>

            <div className='flex flex-col max-w-4xl lg:mx-auto gap-4 bg-amber-50 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 mx-4'>
                <h1 className="text-2xl text-gray-500 font-[IBM_Plex_Serif] italic mb-4">
                    "Code is like humor. When you have to explain it, it’s bad." – Cory House
                </h1>
            </div>

            <div className='flex w-fill justify-center md:p-24 p-8 flex-col gap-8 items-center bg-linear-to-t from-amber-50 from-10+'></div>

            <div className="w-full justify-center bg-amber-50 pb-16">
                <div className="max-w-6xl gap-8 items-center flex flex-col lg:flex-row mx-auto lg:py-0 py-12">
                    <img src={examenimg} alt="Imgae from my graduation" className="lg:max-w-120 object-cover h-100 rounded-xl" />
                    <div className='lg:py-12 px-4 lg:px-0'>
                        <h1 className="text-7xl font-[Josefin_sans] mb-2">My Journey</h1>
                        <p className="text-2xl text-gray-500 font-[IBM_Plex_Serif] italic mb-4">From a young age, I've been captivated by the world of technology and design.</p>
                        <p className="max-w-4xl text-md text-gray-600">
                        My journey began with a fascination for how things work, leading me to explore various programming languages and design principles. Over the years, I've honed my skills through formal education and hands-on projects, always striving to create solutions that are not only functional but also delightful to use. Today, I continue to push the boundaries of what's possible, driven by a passion for innovation and a commitment to excellence.
                        </p>

                        <p className="group relative w-max">
                        <div className="flex flex-row gap-2 items-center border-2 border-[#848546ff] px-4 py-2 rounded-full mt-4 transition-colors duration-300 cursor-pointer">
                        
                            <Link to="/about/my-journey" className='text-[#848546ff] text-xl group-hover:font-bold transition-all duration-700'>Read more</Link>
                            <ArrowIcon size={24} color="#848546ff" className="group-hover:rotate-x-180 transition-transform duration-700"/>
                        </div>
                        <LeafUnderline size={240} color="#848546ff" className="absolute -bottom-6 left-0 right-0 mx-auto"/>
                        </p>
                    
                    </div>
                </div>
            </div>

            <div className='flex w-fill justify-center md:p-24 p-8 flex-col gap-8 items-center bg-linear-to-t to-amber-50 from-10+'></div>

            <div className="h-32"></div>
        </div>
    );
};

export default AboutPage;