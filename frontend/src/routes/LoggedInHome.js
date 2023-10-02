import {useState} from "react";
import {Howl, Howler} from "howler";
import {Icon} from "@iconify/react";
import spotify_logo from "../assets/images/spotify_logo_white.svg";
import IconText from "../components/shared/IconText";
import TextWithHover from "../components/shared/TextWithHover";
import LoggedInContainer from "../containers/LoggedInContainer";

const focusCardsData = [
    {
        title: "Best of Romance",
        description: "Listen to the best romance songs",
        imgUrl: "https://c.saavncdn.com/editorial/BestOfRomanceHindi_20230701031821_500x500.jpg",
    },
    {
        title: "ChartBusters",
        description: "Listen to all the top songs of different charts",
        imgUrl: "https://c.saavncdn.com/editorial/Chartbusters2022Hindi_20221207062041_500x500.jpg",
    },
    {
        title: "Best of Dance",
        description: "Best songs to dance on",
        imgUrl: "https://c.saavncdn.com/editorial/BestOfDanceHindi_20230721044301_500x500.jpg",
    },
    {
        title: "Chill Maro",
        description: "Listen to songs when you want to chill",
        imgUrl: "https://c.saavncdn.com/editorial/ChillMaaro_20230701031848_500x500.jpg",
    },
    {
        title: "Dance Hits",
        description: "Listen to the best songs to dance on",
        imgUrl: "https://c.saavncdn.com/editorial/DanceHits2023Hindi_20230705055558_500x500.jpg",
    },
];

const soundOfIndiaCardsData = [
    {
        title: "Best of R&B",
        description: "Best of R&B songs",
        imgUrl: "https://is1-ssl.mzstatic.com/image/thumb/QIe56Fx6d2tzAKcqsJ9rKA/316x316cc.webp",
    }, 
    {
        title: "Party All Night",
        description: "Songs to do the party all night long",
        imgUrl: "https://is1-ssl.mzstatic.com/image/thumb/SG-S3-US-Std-Image-000001/v4/23/ea/e2/23eae295-3b1e-ef8b-c365-2b575edce414/image/316x316cc.webp",
    },
    {
        title: "Emraan Hashmi Essentials",
        description: "Listen to the best Emraan Hashmi songs",
        imgUrl: "https://is1-ssl.mzstatic.com/image/thumb/GRqBbg3RdeWrCEEWWcbYGw/316x316cc.webp",
    },
    {
        title: "Best Pop Songs",
        description: "Listen to the best pop songs",
        imgUrl: "https://is1-ssl.mzstatic.com/image/thumb/Features71/v4/ea/cc/3a/eacc3af9-d10c-85e6-8787-afea90980415/pr_source.png/316x316cc.webp",
    },
    {
        title: "Bollywood Dance Songs",
        description: "Best of bollywod dance songs ",
        imgUrl: "https://is1-ssl.mzstatic.com/image/thumb/SG-S3-US-Std-Image-000002/v4/c5/ad/c3/c5adc3ef-37db-3655-00f9-6a827b4be0f2/image/316x316cc.webp",
    },
];

const spotifyPlaylistsCardData = [
    {
        title: "This is one",
        description: "Relax and indulge with beautiful piano pieces",
        imgUrl: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1546&q=80",
    },
    {
        title: "Deep Focus",
        description: "Keep calm and focus with this music",
        imgUrl: "https://images.unsplash.com/photo-1558021212-51b6ecfa0db9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1766&q=80",
    },
    {
        title: "Instrumental Study",
        description: "Focus with soft study music in the background.",
        imgUrl: "https://images.unsplash.com/photo-1612225330812-01a9c6b355ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
    },
    {
        title: "Focus Flow",
        description: "Up tempo instrumental hip hop beats",
        imgUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    },
    {
        title: "Beats to think to",
        description: "Focus with deep techno and tech house",
        imgUrl: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    },
];

const Home = () => {
    return (
        <LoggedInContainer curActiveScreen="home">
            <PlaylistView titleText="Spotify Playlists" cardsData={focusCardsData} />
            <PlaylistView
                titleText="Sound of India"
                cardsData={soundOfIndiaCardsData}
            />
            <PlaylistView
                titleText="Focus"
                cardsData={spotifyPlaylistsCardData}
            />
            
        </LoggedInContainer>
    );
};

const PlaylistView = ({titleText, cardsData}) => {
    return (
        <div className="text-white mt-8">
            <div className="text-2xl font-semibold mb-5">{titleText}</div>
            <div className="w-full flex justify-between space-x-4">
                {
                    // cardsData will be an array
                    cardsData.map((item) => {
                        return (
                            <Card
                                title={item.title}
                                description={item.description}
                                imgUrl={item.imgUrl}
                            />
                        );
                    })
                }
            </div>
        </div>
    );
};

const Card = ({title, description, imgUrl}) => {
    return (
        <div className="bg-black bg-opacity-40 w-1/5 p-4 rounded-lg">
            <div className="pb-4 pt-2">
                <img className="w-full rounded-md" src={imgUrl} alt="label" />
            </div>
            <div className="text-white font-semibold py-3">{title}</div>
            <div className="text-gray-500 text-sm">{description}</div>
        </div>
    );
};

export default Home;
