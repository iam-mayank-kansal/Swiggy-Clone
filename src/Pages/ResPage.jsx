import { ResStarter } from "../components/ResStarter";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Heading } from "../components/Heading";
import usefetch from "../hooks/usefetch";

const ResPage = () => {
    const [RestaurentDetails, setRestaurentDetails] = useState(null);
    const { resId } = useParams();
    const { APIData, loading, error } = usefetch(`https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.65420&lng=77.23730&restaurantId=${resId}`);
  
    useEffect(() => {
      if (APIData && APIData.data && APIData.data.cards) {
        const restaurantDetails = APIData.data.cards[2] || null;
        setRestaurentDetails(restaurantDetails);
      }
    }, [APIData]);
  
    if (loading) {
      return <section className="max-w-[700px] mx-auto"><Heading name="Loading ..." /></section>;
    }
  
    if (error) {
      const errorMessage = error.message || "An unknown error occurred.";
      return <section className="max-w-[700px] mx-auto"><Heading name={`Error: ${errorMessage}`} /></section>;
    }
  
    return (
      <main className="max-w-[700px] mx-auto mt-4">
        {RestaurentDetails ? (
          <ResStarter RestaurentDetails={RestaurentDetails} />
        ) : (
          <Heading name="No restaurant details available" />
        )}
      </main>
    );
  };

  export default ResPage;
  
