import backgroundimg from '../../assets/images/background.png';

const FlowerPage: React.FC = () => {
    return (
        <>
            <img src={backgroundimg} alt="Background" className="fixed inset-0 object-cover object-left w-full h-full -z-10" />
            <div className="min-h-screen flex flex-col items-center justify-center px-8 py-16">
                <h1 className="text-5xl font-[Josefin_sans] text-amber-900 mb-8">Flower</h1>
                <div className="max-w-4xl bg-amber-50 bg-opacity-90 p-8 rounded-lg shadow-lg">
                    <p className="text-lg text-amber-900 mb-4">
                        Flower is a unique screen use visualization app developed in Kotlin using Jetpack Compose for Android devices. The app tracks and visualizes users' screen time, providing insights into their usage patterns.
                    </p>
                    <p className="text-lg text-amber-900 mb-4">
                        Key features of Flower include:
                    </p>
                    <ul className="list-disc list-inside text-lg text-amber-900 mb-4">
                        <li>Real-time tracking of screen time and app usage.</li>
                        <li>Visual representations of data through charts and graphs.</li>
                        <li>Customizable notifications to help users manage their screen time.</li>
                        <li>Data storage using SQLite for offline access and analysis.</li>
                    </ul>
                    <p className="text-lg text-amber-900">
                        Flower aims to promote healthier digital habits by providing users with the tools they need to understand and manage their screen time effectively.
                    </p>
                </div>
            </div>
        </>
    )
}

export default FlowerPage;