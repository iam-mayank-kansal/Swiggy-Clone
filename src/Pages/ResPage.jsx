import { ResStarter } from "../components/ResStarter"
import { useEffect, useState } from "react";

export const ResPage = () => {

    const [fullAPI, setfullAPI] = useState([]);
    const [RestaurentDetails, setRestaurentDetails] = useState()

    useEffect(() => {
        fetchData();
        console.log(fullAPI);
    }, []);

    const fetchData = async () => {
        try {

            const response = await fetch('https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.65420&lng=77.23730&restaurantId=831065&submitAction=ENTER');

            const json = await response.json();
            setfullAPI(json);
            setRestaurentDetails(json.data.cards[2])
            console.log(json);
        }
        catch (error) {
            console.error(error)
        }
    };
    return (
        <main className="my-[100px]">
            <ResStarter RestaurentDetails={RestaurentDetails} />
            {/* <section className="h-[100vh]"></section> */}
        </main>
    )
}