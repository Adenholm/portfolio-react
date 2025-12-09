import wolfimg from '../../assets/images/wolfsbane/wolfsbane.png';
import ProjectDetails from '../../components/ProjectDetails';
import ProjectLink from '../../components/ProjectLink';
import enemy1 from '../../assets/images/wolfsbane/enemy-sketch.jpg';
import enemy2 from '../../assets/images/wolfsbane/enemy-sketch3.jpg';
import enemy3 from '../../assets/images/wolfsbane/enemy-sketch4.jpg';
import enemy4 from '../../assets/images/wolfsbane/enemy-sketch5.jpg';
import enemy5 from '../../assets/images/wolfsbane/enemy-sketch6.jpg';
import enemy6 from '../../assets/images/wolfsbane/enemy-sketch7.jpg';
import enemy7 from '../../assets/images/wolfsbane/enemy-sketch8.jpg';
import enemy8 from '../../assets/images/wolfsbane/enemy-sketch9.jpg';
import backgroundimg from '../../assets/images/background.png';
import wolfsketch1 from '../../assets/images/wolfsbane/wolf-sketch2.jpg';
import wolfsketch2 from '../../assets/images/wolfsbane/wolf-sketch.jpg';
import levelsketch from '../../assets/images/wolfsbane/level-sketch.jpg';
import sketch1 from '../../assets/images/wolfsbane/sketch.jpg';
import sketch2 from '../../assets/images/wolfsbane/sketch2.jpg';
import sketch3 from '../../assets/images/wolfsbane/sketch4.jpg';
import trot from '../../assets/images/wolfsbane/Trot.gif';
import dash from '../../assets/images/wolfsbane/Dash.gif';
import jump from '../../assets/images/wolfsbane/Jump.gif';
import video from '../../assets/images/wolfsbane/gymnasiearbete.mp4';
import wolf from '../../assets/images/wolfsbane/wolf.png';
import AnimatedPath from '../../components/AnimatedPath';

const WolfsBanePage: React.FC = () => {
    const details = {
        title: "WolfsBane",
        subtitle: "A 2D Platformer Prototype",
        description: "This game prototype was created during my final year in high school as a part of my high school thesis where I researched the process of creating a game. Since this was the first time I ever created a game I spent a great deal of time researching and learning new things, tools and even programming languages. Since I really like illustration the focus was mostly put on the visual aspects of the game and less on the actual gameplay.",
        categories: ["Game Development", "2D Animation"],
        team: ["Hanna Adenholm"],
        year: "2020",
        technologies: ["Unity", "C#", "Procreate", "Spriteshape"],
        img: wolfimg,
    }

    return (
        <div>
            <img src={backgroundimg} alt="Background" className="fixed inset-0 object-cover object-left w-full h-full -z-10 blur scale-105" />
            <ProjectDetails {...details} />

            <video src={video} loop muted autoPlay controls className='max-w-6xl mx-auto my-24 rounded-xl w-full'></video>

            <div className='flex flex-col md:flex-row max-w-6xl justify-center justify-between w-full gap-24 mx-auto my-24'>
                <div className="flex w-100 h-fit justify-center bg-[hsl(45_80%_95%_/_0.7)] backdrop-blur-lg p-8 flex-col gap-8 items-center rounded-4xl">
                    <h2 className="text-3xl font-bold font-[Josefin_sans]">The Goal</h2>
                    <div className="max-w-6xl flex flex-row gap-8 content-center">
                        <div>
                            <p>Since I had never created a game before the entire purpose of creating this prototype was 
                                to research and try to learn more about the process of game creation.</p>      
                        </div>
                    </div>
                </div>
                <AnimatedPath color='#fff9dc6c' size={1200} duration={2} strokeWidth={1} className='md:mx-[-55%] md:my-16 my-[-60%] w-full rotate-160 scale-x-[-1] z-[-1]'/>

                <div className="flex w-120 h-fit justify-center bg-[hsl(45_80%_95%_/_0.7)] backdrop-blur-lg p-12 flex-col gap-8 items-center rounded-4xl mt-64">
                    <h1 className="text-3xl font-bold font-[Josefin_sans]">Implementation</h1>
                            <p>I choose to implement the game in Unity as it allows for real time editing 
                                and is a well known game engine with lots of tools and resources. Since it 
                                is so widely used it also means that there exists a lot of turorials and 
                                resources for the enginge. Additionally, free to use non-commercialy.</p>
                </div>
            </div>

            <div className="flex w-fill justify-center bg-amber-50 md:p-24 p-8 flex-col gap-8 items-center">
                <div className="max-w-6xl gap-8 content-center gap-8 flex flex-col">   
                    <h2 className="text-3xl font-bold font-[Josefin_sans]">Main character</h2>
                    <div className="flex flex-col gap-4 md:flex-row items-center">
                        <p className='md:w-50 w-full'>For a long time I've always loved canines such as dogs and wolves. They 
                            are often occuring in my illustrations and one of my favourite things 
                            to draw so, inspired by games like Ookami and The Legend of Zelda: Twilight 
                            Princess, I chose to have the playable character be a white wolf. I of 
                            course begun by doing a few sketches:</p>
                        <div className="flex flex-row items-center max-w-6xl overflow-hidden rounded-xl w-fit h-auto">
                            <img src={wolfsketch1} alt="" className='h-100'/>
                            <img src={wolfsketch2} alt="" className='h-100'/>
                        </div>
                    </div>
                    
                    <p>After that I did the final design in procreate on my iPad:</p>
                    <img src={wolf} alt="" className='max-w-170 w-full'/>
                </div>
            </div>
            <div className='flex flex-col md:flex-row max-w-6xl justify-center justify-between w-full gap-24 mx-auto my-24'>
                <div className="flex  h-fit justify-center bg-[hsl(45_80%_95%_/_0.7)] backdrop-blur-lg p-8 flex-col gap-8 items-center rounded-4xl">
                    <h2 className="text-3xl font-bold font-[Josefin_sans] mt-16">Level design</h2>
                    <img src={levelsketch} alt="" className='h-55'/>
                    <div className="flex flex-col gap-4 md:flex-row items-center">
                        <p className='md:w-90 w-full'>For the level design and the gameplay I took a lot of inspiration from one 
                            of my at the time favourite games on the wii, Rayman origins. I tried sketching 
                            down a couple of levels to try to analyse how they designed their levels then 
                            tried to replicate the feel of the parts I liked the most.</p>
                        <div className="flex flex-row items-center max-w-6xl overflow-hidden rounded-xl w-fit">
                            <img src={sketch1} alt="" className='h-55'/>
                            <img src={sketch2} alt="" className='h-55'/>
                            <img src={sketch3} alt="" className='h-55'/>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-col md:flex-row max-w-6xl justify-center justify-between w-full gap-24 mx-auto my-24'>
                <div className="flex  h-fit justify-center bg-[hsl(45_80%_95%_/_0.7)] backdrop-blur-lg p-8 flex-col gap-8 items-center rounded-4xl">
                    <h2 className="text-3xl font-bold font-[Josefin_sans] mt-16">Enemies</h2>
                    <p>My plan was to inlcude some different enemies so I did a few concept sketches 
                        for them. However, I didn't have time to implement all of them so the only one 
                        I ended up implementing and animating was a black crow.</p>
                    <div className="flex flex-wrap items-center max-w-6xl rounded-xl">
                        <img src={enemy1} alt="" className='h-55'/>
                        <img src={enemy2} alt="" className='h-55'/>
                        <img src={enemy3} alt="" className='h-55'/>
                        <img src={enemy4} alt="" className='h-55'/>
                        <img src={enemy5} alt="" className='h-55'/>
                        <img src={enemy6} alt="" className='h-55'/>
                        <img src={enemy7} alt="" className='h-55'/>
                        <img src={enemy8} alt="" className='h-55'/>
                    </div>
                </div>
            </div>
            <div className='flex flex-col md:flex-row max-w-6xl justify-center justify-between w-full gap-24 mx-auto my-24'>
                <div className="flex  h-fit justify-center bg-[hsl(45_80%_95%_/_0.7)] backdrop-blur-lg p-8 flex-col gap-8 items-center rounded-4xl">
                    <h2 className="text-3xl font-bold font-[Josefin_sans] mt-16">Animations</h2>
                    <p>The animations were probably the part of the process that took the longest. I 
                        animated all the frames by hand in procreate. In total I did four for the wolf 
                        and one for the crow. This was also basically the first time I animated anything 
                        so I had to watch some tutorials for this as well.</p>
                    <div className="flex flex-col md:flex-row items-center max-w-6xl overflow-hidden rounded-xl w-fit mx-auto">
                        <img src={trot} alt="" className='h-55'/>
                        <img src={dash} alt="" className='h-55'/>
                        <img src={jump} alt="" className='h-55'/>
                    </div>
                </div>
            </div>

            <div className="my-24 w-full justify-center bg-amber-50 ">
            <div className="max-w-6xl gap-8 items-center flex flex-col lg:flex-row mx-auto lg:py-0 py-12">
                <img src={wolfimg} alt="Mockup" className="lg:max-w-120 object-cover h-170" />
                <div className='lg:py-12 px-8 lg:px-0'>
                    <h2 className="text-3xl font-bold font-[Josefin_sans] mt-16">Result</h2>
                    <div className="content group">
                        <div>
                            <p>The resulting game only became a very short prototype as the scope of the game I 
                                chose was way too big for the time I had available to me. Despite it's many bugs 
                                and rough edges it did however look rather well polished for being a first time 
                                game.</p>
                            <p>I also didn't have time to create any menus or any UI elements which are often 
                                crucial parts of games.</p>
                        </div>
                    </div>
                    <h2 className="text-3xl font-bold font-[Josefin_sans] mt-16">Learnings</h2>
                    <div className="content group">
                        <div>
                            <p>This whole project taught me a lot about how games are made. Prior to this I didn't 
                                know much at all and hadn't really though about it a lot. I hadn't really thought 
                                about the amount of time and work it takes to create a whole game and how many 
                                different parts there is to it. And, just like many other beginners, I fell into the 
                                trap of being overambitious in the beginning. I had this whole idea planned out but 
                                because the scope was too big I didn't get that far. Instead I should've chosen to 
                                do a smaller game that I would have had enough time to finish. </p>

                                <p>Nevertheless, I had a great time and I learned so much creating this game 
                                    prototype. It really was my first step into the world of game development.</p>
                        </div>
                    </div>
                </div>
            </div>
            </div>

            <div className="flex w-fill justify-between max-w-6xl mx-auto pb-12 px-4">
                <ProjectLink link="/projects/rent-a-toy" name="Rent a Toy" next={false} />
                <ProjectLink link="/projects/flower" name="Flower" next={true} />
            </div>
        </div>
    );
}
export default WolfsBanePage;