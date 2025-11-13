import wolfimg from '../../assets/images/wolfsbane/wolfsbane.png';
import ProjectDetails from '../../components/ProjectDetails';
import ProjectLink from '../../components/ProjectLink';

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
            <img src={wolfimg} alt="Background" className="fixed inset-0 object-cover object-left w-full h-full -z-10 blur scale-105" />
            <ProjectDetails {...details} />
            <div className="h-32"></div>

            <div className="flex w-fill justify-between max-w-6xl mx-auto pb-12 px-4">
                <ProjectLink link="/projects/rent-a-toy" name="Rent a Toy" next={false} />
                <ProjectLink link="/projects/flower" name="Flower" next={true} />
            </div>
        </div>
    );
}
export default WolfsBanePage;