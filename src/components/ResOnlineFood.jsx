import { Heading } from "./Heading";
import { useState, useEffect } from "react";

export default function ResOnlineFood({ ResOnlineFoodData }) {
    const [ResOnlineinfoCards, setResOnlineInfoCards] = useState([]);

    useEffect(() => {
        const info = ResOnlineFoodData?.gridElements?.infoWithStyle?.restaurent || [];
        setResOnlineInfoCards(info);
    }, [ResOnlineFoodData]);

    const btn_Tasks = ["Filter", "Sort By", "Fast Delivery", "Rating 4.0+", "Pure Veg", "Offers", "Rs. 300 - Rs. 600", "Less than 300"]

    return (
        <section className="max-w-[1200px] mx-auto font-sans my-[20px] text-[17px]">
            <Heading name="Restaurants with online food delivery in Delhi" />
            {/* btns  */}
            <div className="flex gap-3 my-3">
                {
                    btn_Tasks.map((item, index) => {
                        return (
                            <button key={index} className="border-2 border-gray-300 rounded-[20px] px p-4 py-1">{item}</button>
                        )
                    })
                }

            </div>
            {/* cards  */}
            <div className="flex flex-wrap">
                
                {ResOnlineinfoCards.map((item, index) => {
                    return (
                        <div key={index}>
                            <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${item.info.cloudinaryImageId}`} alt={item.info.cloudinaryImageId} />
                            <h3>{item.info.name}</h3>
                            <h4>{item.info.avgRating} , {item.info.sla.slaString}</h4>
                            <p>{item.info.cuisines.join()}</p>
                            <p>{item.info.areaName}</p>
                        </div>
                    )
                })
                }
            </div>
        </section>
    )
}