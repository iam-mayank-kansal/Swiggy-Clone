import { useEffect, useState } from "react";
import { FoodSlider } from "../components/FoodSlider";
import { TopRatedRes } from "../components/TopRatedRes";
import ResOnlineFood from "../components/ResOnlineFood";
import usefetch from "../hooks/usefetch";
import OfflineImg from "../assets/images/u-are-offline.png"
import useOnlineStatus from "../hooks/useOnlineStatus";

export const Home = () => {
    const OnlineStatus = useOnlineStatus();
    console.log(OnlineStatus)
    if (OnlineStatus === false) return <div className="flex items-center justify-center flex-col">
        <h1 className="text-4xl font-bold font-mono">You are Offline, Please Check Your Internet</h1>
        <img src={OfflineImg} alt="Offline Image" width={800} />
    </div>

    const [whatsOnMind, setWhatsOnMind] = useState([]);
    const [TopRatedResData, setTopRatedResData] = useState([]);
    const [ResOnlineFoodData, setResOnlineFoodData] = useState([]);


    // Use the custom hook to fetch data
    const { APIData, loading, error } = usefetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65420&lng=77.23730&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

    useEffect(() => {
        if (APIData) {
            setWhatsOnMind(APIData?.data?.cards[0]?.card?.card || []);
            setTopRatedResData(APIData?.data?.cards[1]?.card?.card || []);
            setResOnlineFoodData(APIData?.data?.cards[1]?.card?.card || []);
            console.log("run", APIData.data.cards)

        }
    }, [APIData]);

    return (
        <main >
            <FoodSlider WhatsOnMind={whatsOnMind} />
            <TopRatedRes topRatedResData={TopRatedResData} />
            {ResOnlineFoodData && (
                <ResOnlineFood ResOnlineFoodData={ResOnlineFoodData} />
            )}
        </main>
    );
};
