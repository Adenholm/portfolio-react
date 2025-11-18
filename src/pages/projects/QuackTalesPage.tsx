import backgroundimg from '../../assets/images/background.png';
import ProjectDetails from '../../components/ProjectDetails';
import quacktalesimg from '../../assets/images/quacktales.png';
import ProjectLink from '../../components/ProjectLink';

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

    const slideIds = [
        "id.g244d59466fa_0_0",
        "id.g8b385fd27f_2_71",
        "id.g244d36847bc_1_0",
        "id.g8b385fd27f_2_93",
        "id.g245c8cee184_0_0",
        "id.ga1242414e1_0_10",
        "id.g244d59466fa_0_178",
        "id.g244d59466fa_0_168",
        "id.gd4b8ba5a74_0_105",
        "id.g245c8cee184_1_7",
        "id.g244d59466fa_0_188",
        "id.g24833879713_1_15",
        "id.ga1242414e1_0_46",
        "id.g2459d654fce_0_12",
        "id.g2459d654fce_0_28",
        "id.g24699c10c84_4_15"
    ];

    const presentationId = "1qhGyFw917rpcstwwJDMxn13Ec8FgHQNd8DdfEcQ3NOU";

    return (
        <div>
            <img src={backgroundimg} alt="Background" className="fixed inset-0 object-cover object-left w-full h-full -z-10 blur scale-105" />
            <ProjectDetails {...details} />
            <div className="h-32"></div>

            <div className="flex flex-col gap-8 max-w-5xl mx-auto">
                {slideIds.map((id) => (
                    <div key={id} className="w-full aspect-[16/9] rounded-xl overflow-hidden">
                        <iframe
                        key={id}
                        src={`https://docs.google.com/presentation/d/${presentationId}/embed?slide=${id}&rm=minimal`}
                        className="w-[calc(100%+5px)] aspect-[16/9] rounded-xl"
                        allow="autoplay"
                        ></iframe>
                    </div>
                ))}
            </div>

            <div className="h-32"></div>

            <div className="flex w-fill justify-between max-w-6xl mx-auto pb-12 px-4">
                <ProjectLink link="/projects/rent-a-toy" name="Rent a Toy" next={false} />
                <ProjectLink link="/projects/cohort-manager" name="Cohort Manager" next={true} />
            </div>
        </div>
    );
}
export default QuackTalesPage;