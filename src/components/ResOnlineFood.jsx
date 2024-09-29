import { Heading } from "./Heading";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Rating from "../assets/images/Rating.png"
import "../App.css"

export default function ResOnlineFood({ ResOnlineFoodData }) {
    const [ResOnlineinfoCards, setResOnlineInfoCards] = useState([]);

    useEffect(() => {
        const info = ResOnlineFoodData?.gridElements?.infoWithStyle?.restaurants || [];
        setResOnlineInfoCards(info);
    }, [ResOnlineFoodData]);

    const btn_Tasks = ["Filter", "Sort By", "Fast Delivery", "Rating 4.0+", "Pure Veg", "Offers", "Rs. 300 - Rs. 600", "Less than 300"]

    return (
        <section className="max-w-[1200px] mx-auto my-[20px] text-[17px]">
            <Heading name="Restaurants with online food delivery in Delhi" />
            {/* btns  */}
            <div className="flex gap-3 my-3">
                {
                    btn_Tasks.map((item, index) => {
                        return (
                            <button key={index} className="border-2 border-gray-300 rounded-[20px] p-4 py-1">{item}</button>
                        )
                    })
                }

            </div>
            {/* cards  */}
            <div className="flex flex-wrap py-5 justify-between">

                {ResOnlineinfoCards.map((item, index) => {
                    // {cloudinaryImageId , name , avgRating , cuisines , areaName} 
                    return (
                        <Link to="/restaurent/12" key={index}>
                            <div  className="w-[270px] hover:scale-95 duration-150 mb-10 cursor-pointer">
                                <div className="h-48 w-full overflow-hidden rounded-2xl shadow-lg">
                                    <img className="object-cover object-center h-full w-full" src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${item.info.cloudinaryImageId}`} alt={item.info.cloudinaryImageId} />
                                </div>
                                <div className="pt-3 pl-[10px]">
                                    <h3 className="text-[18px] truncated-text font-gilroyExtraBold">{item.info.name}</h3>
                                    <div className="flex gap-2 items-center">
                                        <img src={Rating} alt={Rating} height={10} width={20} />
                                        <h4 className="font-gilroyExtraBold">{item.info.avgRating} • {item.info.sla.slaString}</h4>
                                    </div>
                                    <p className="truncated-text">{item.info.cuisines.join()}</p>
                                    <p>{item.info.areaName}</p>
                                </div>
                            </div>
                        </Link>
                    )
                })
                }
            </div>
        </section>
    )
}