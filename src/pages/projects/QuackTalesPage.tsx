import backgroundimg from '../../assets/images/background.png';
import ProjectDetails from '../../components/ProjectDetails';
import quacktalesimg from '../../assets/images/quacktales.gif';

const QuackTalesPage: React.FC = () => {
    const details = {
        title: "Quack Tales",
        subtitle: "A Cooperative Multiplayer Game Made in Unity",
        description: "Quack Tales is a cooperative multiplayer game developed in Unity, where players embark on adventurous quests as charming duck characters. The game emphasizes teamwork and strategy, requiring players to collaborate to overcome challenges and achieve common goals. This was my bachelor thesis project where the goal was to create a collaborative game. The game can be played by two to four players where you play as the ducklings Bengt, Benny, Bongo and Bosse trying to find their way back to their mother.",
        categories: ["Game Development", "Multiplayer Design"],
        team: ["Hanna Adenholm", "Alice Smith", "Bob Johnson"],
        year: "2024",
        technologies: ["Unity", "C#", "Procreate"],
        img: quacktalesimg
    }

    return (
        <div>
            <img src={backgroundimg} alt="Background" className="fixed inset-0 object-cover object-left w-full h-full -z-10 blur scale-105" />
            <ProjectDetails {...details} />
            <div className="h-32"></div>

            <div className="flex w-fill bg-amber-50">
                <div className="flex flex-col gap-8 max-w-5xl mx-auto py-24 px-4">
                    <h2 className="text-4xl font-[Josefin_Sans]">Goal</h2>
                    <p>The goal of this project was to create a cooperative multiplayer game that encourages teamwork and communication among players. We wanted to design a game that is not only fun to play but also fosters collaboration and strategic thinking.</p>
                    <p>My role in the project involved creating the art assets, animating and programming some of the game-features. I worked closely with the development team to ensure that the visuals aligned with the gameplay mechanics and overall vision.</p>
                </div>
            </div>
            <div className="h-32"></div>

            <div className="flex w-fill justify-between max-w-5xl mx-auto pb-12 px-4">
                <a href="/projects/rent-a-toy" className='text-white text-lg'>Previous project: Rent a Toy</a>
                <a href="/projects/cohort-manager" className='text-white text-lg'>Next project: Cohort Manager</a>
            </div>
        </div>
    );
}
export default QuackTalesPage;