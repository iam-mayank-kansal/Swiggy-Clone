import { Heading } from "./Heading";
import Right_Arrow from "../assets/images/right-arrow.png";
import { useEffect, useState } from "react";
import "../styles/FoodSlider.css";
import ShimmerCard1 from "./ShimmerCard1";

export const FoodSlider = ({ WhatsOnMind }) => {
    const [InfoCards, setInfoCards] = useState([]);

    useEffect(() => {
        const info = WhatsOnMind?.gridElements?.infoWithStyle?.info || [];
        setInfoCards(info);
    }, [WhatsOnMind]);

    return (
        <section className="max-w-[1200px] mx-auto">
            {/* Header with Title and Arrows */}
            <div className="flex justify-between my-[20px]">
                <Heading name="What's on your mind?" />
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

            {/* Slider Content */}
            <div className="max-w-[1200px] min-w-[1200px] overflow-scroll scrollbar-hide border-b-2 border-gray-300 pb-[20px]">
                <div className={`flex gap-[15px] pb-[20px]`}>
                    {InfoCards.length === 0 ? (
                        // Show shimmer cards if InfoCards is empty
                        <section className="w-full flex justify-between ">
                            {[1, 2, 3, 4, 5, 6, 7].map((item, index) => (
                                <ShimmerCard1 key={index} />
                            ))}
                        </section>
                    ) : (
                        // Render the actual InfoCards
                        InfoCards.map((item, index) => (
                            <img
                                key={index}
                                className="h-[200px]"
                                src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/${item.imageId}`}
                                alt={item.title || `Item ${index}`}
                            />
                        ))
                    )}
                </div>
            </div>
        </section>
    );
};
