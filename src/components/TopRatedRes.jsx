import { useEffect, useState } from "react";
import { Heading } from "./Heading";
import Right_Arrow from "../assets/right-arrow.png";

export const TopRatedRes = ({ topRatedResData }) => {
    // Consider renaming prop to avoid confusion
    const [infoCards, setInfoCards] = useState([]);

    useEffect(() => {
        const info = topRatedResData?.gridElements?.infoWithStyle?.restaurent || [];
        setInfoCards(info);

    }, []);


    return (
        <section className="max-w-[1200px] mx-auto font-sans">
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

            <div className="max-w-[1200px] min-w-[1200px] overflow-scroll scrollbar-hide border-b-2 border-gray-300 pb-[20px]">
                {
                    infoCards.map((cards, index) => {
                        return (
                            <div className="border-2 min-w-[300px] max-w-[300px]">
                                <div className="border-2 min-w-[300px] max-w-[300px] min-h-[200px] rounded-[20px] relative">
                                    <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cards.info.cloudinaryImageId}`} alt="" />
                                    <h2 className="absolute text-[27px] font-bold bottom-[10px] left-[15px]">20% OFF UPTO $50</h2>
                                </div>
                                <div className="pl-[15px]">
                                    <h3 className="text-[20px] font-semibold font-sans">{cards.info.name}</h3>
                                    <h4 className="flex text-[18px] items-center gap-[6px] font-medium">
                                        <span>
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" role="img" aria-hidden="true" strokeColor="rgba(2, 6, 12, 0.92)" fillColor="rgba(2, 6, 12, 0.92)"><circle cx="10" cy="10" r="9" fill="url(#StoreRating20_svg__paint0_linear_32982_71567)"></circle><path d="M10.0816 12.865C10.0312 12.8353 9.96876 12.8353 9.91839 12.865L7.31647 14.3968C6.93482 14.6214 6.47106 14.2757 6.57745 13.8458L7.27568 11.0245C7.29055 10.9644 7.26965 10.9012 7.22195 10.8618L4.95521 8.99028C4.60833 8.70388 4.78653 8.14085 5.23502 8.10619L8.23448 7.87442C8.29403 7.86982 8.34612 7.83261 8.36979 7.77777L9.54092 5.06385C9.71462 4.66132 10.2854 4.66132 10.4591 5.06385L11.6302 7.77777C11.6539 7.83261 11.706 7.86982 11.7655 7.87442L14.765 8.10619C15.2135 8.14085 15.3917 8.70388 15.0448 8.99028L12.7781 10.8618C12.7303 10.9012 12.7095 10.9644 12.7243 11.0245L13.4225 13.8458C13.5289 14.2757 13.0652 14.6214 12.6835 14.3968L10.0816 12.865Z" fill="white"></path><defs><linearGradient id="StoreRating20_svg__paint0_linear_32982_71567" x1="10" y1="1" x2="10" y2="19" gradientUnits="userSpaceOnUse"><stop stop-color="#21973B"></stop><stop offset="1" stop-color="#128540"></stop></linearGradient></defs></svg>
                                        </span>
                                        <span className="mr-[3px]">
                                            {cards.info.avgRating} •
                                        </span>
                                        <span>
                                            35-40 mins
                                        </span>
                                    </h4>
                                    <p className="text-[19px]">
                                        Waffle, , Ice Cream
                                    </p>
                                    <p className="text-[19px]">
                                        CONNAUGHT CIRCUS
                                    </p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    );
};
