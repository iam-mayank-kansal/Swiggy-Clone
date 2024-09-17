
export default async function API_Call() {
    try {
        const apiResponse = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65420&lng=77.23730&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

        if (!apiResponse.ok) {
            throw new Error(`HTTP error! Status: ${apiResponse.status}`);
        }

        const apiDataJson = await apiResponse.json();
        console.log("Swiggy API:", apiDataJson);

        const cards = apiDataJson.data?.cards || [];
        setFullAPI(cards);
        setWhatsOnMind(cards[0]?.card?.card || []);
        setTopRatedResData(cards[1]?.card?.card || []);

    } catch (error) {
        console.error("Error fetching API data:", error);
    }
}