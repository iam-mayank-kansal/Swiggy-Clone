import { useEffect, useState } from "react";
import { FoodSlider } from "../components/FoodSlider";
import { TopRatedRes } from "../components/TopRatedRes";
import ResOnlineFood from "../components/ResOnlineFood";
import { ExploreItemsTemplate } from "../common/Explore";

export const Home = () => {
    const [fullAPI, setFullAPI] = useState([]);
    const [whatsOnMind, setWhatsOnMind] = useState([]);
    const [TopRatedResData, setTopRatedResData] = useState([]);
    const [ResOnlineFoodData, setResOnlineFoodData] = useState([]);
    const [BestPlacesToEatAcrossCities, setBestPlacesToEatAcrossCities] = useState([]);
    const [BestCusinesNearMe, setBestCusinesNearMe] = useState([]);
    const [ExploreEveryRestaurantsNearMe, setExploreEveryRestaurantsNearMe] = useState([]);

    useEffect(() => {
        API_Call();
    }, []);

    async function API_Call() {
        try {
            const apiResponse = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65420&lng=77.23730&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

            if (!apiResponse.ok) {
                throw new Error(`HTTP error! Status: ${apiResponse.status}`);
            }

            const apiDataJson = await apiResponse.json();
            console.log("Swiggy API:", apiDataJson);

            const cards = apiDataJson.data?.cards || [];
            setFullAPI(cards);

            console.log("Cards : ",cards);
            setWhatsOnMind(cards[0]?.card?.card || []);
            console.log("Whats on Mind : ",whatsOnMind);    
            setTopRatedResData(cards[1]?.card?.card || []);
            console.log("Top Rated Restaurent : ",TopRatedResData);
            setResOnlineFoodData(cards[1]?.card?.card || []);
            console.log("Restaurent Online Food Data : ",ResOnlineFoodData);
            setBestPlacesToEatAcrossCities(cards[4]?.card?.card || []);
            setBestCusinesNearMe(cards[5]?.card?.card || []);
            setExploreEveryRestaurantsNearMe(cards[6]?.card?.card || []);

        } catch (error) {
            console.error("Error fetching API data:", error);
        }
    }

    return (
        <main>
            <FoodSlider WhatsOnMind={whatsOnMind} />
            <TopRatedRes topRatedResData={TopRatedResData} />
            {ResOnlineFoodData && (
                <ResOnlineFood ResOnlineFoodData={ResOnlineFoodData} />
            )}
            {/* <ExploreItemsTemplate
                data={BestPlacesToEatAcrossCities}
                titleHead="Best Places to Eat Across Cities"
            />
            <ExploreItemsTemplate
                data={BestCusinesNearMe}
                titleHead="Best Cuisines Near Me"
            />
            <ExploreItemsTemplate
                data={ExploreEveryRestaurantsNearMe}
                titleHead="Explore Every Restaurant Near Me"
            /> */}
        </main>
    );
}
