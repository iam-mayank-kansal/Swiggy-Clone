import { useEffect, useState } from "react";
import { Heading } from "./Heading";
import Right_Arrow from "../assets/images/right-arrow.png";
import "../styles/FoodSlider.css"
import ShimmerCard2 from "./ShimmerCard2";
import Rating from "../assets/images/Rating.png"

import { Link } from "react-router-dom";

export const TopRatedRes = ({ topRatedResData }) => {
    const [infoCards, setInfoCards] = useState([]);

    useEffect(() => {
        const info = topRatedResData?.gridElements?.infoWithStyle?.restaurants || [];
        setInfoCards(info);
        console.log("Top Rated Restaurent Data : ", info);
    }, [topRatedResData]);



    return (
        <section className="max-w-[1200px] mx-auto">
            <div className="flex justify-between my-[20px]">
                <Heading name="Top Rated Chains in Delhi" />
                <div className="flex gap-[5px]">
                    <img
                        src={Right_Arrow}
                        alt="right-arrow"
                        className="h-[40px] rounded-[50%] bg-[#E9EAEA] p-[10px] rotate-[180deg] cursor-pointer"
                    />
                    <img
                        src={Right_Arrow}
                        alt="right-arrow"
                        className="h-[40px] rounded-[50%] bg-[#D7D8D9] p-[10px] cursor-pointer"
                    />
                </div>
            </div>

            <div className="flex gap-3 py-5 justify-between overflow-scroll scrollbar-hide border-b-2 border-gray-300 pb-[20px]">
                {
                    infoCards.length === 0 ? (
                        // Show shimmer cards if InfoCards is empty
                        <section className="w-full flex justify-between ">
                            {[1, 2, 3, 4].map((item, index) => (
                                <ShimmerCard2 key={index} />
                            ))}
                        </section>
                    ) : (
                        infoCards.map((item, index) => {
                            return (
                                <Link to={`/restaurent/${item.info.id}`} key={index}>
                                    <div className="w-[270px] hover:scale-95 duration-150 mb-10 cursor-pointer">
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
                    )
                }
            </div>
        </section>
    );
};
