import React from "react";
import "../App.css";
import { useState, useEffect } from "react";
import { Heading } from "../components/Heading";

export const ExploreItemsTemplate = ({ data, titleHead }) => {
    console.log("DATA", data);
    console.log("titleHead", titleHead);

    const [Explore, setExplore] = useState([]);

    useEffect(() => {
        const info = data?.brands;
        setExplore(info);
        console.log("Explore : ",Explore)
    }, [data]);

    return (
        <div className="max-w-[1200px] mx-auto my-[20px] text-[17px]">
            <Heading name={titleHead} />
            <div className="grid grid-cols-4 gap-5 my-7">
                {Explore.map((item, index) => (
                    <div className="py-2 border-[1px] border-gray-300 rounded-[7px] flex justify-center items-center" key={index}>
                        <a href={item.link} target="_blank" rel="noopener noreferrer">
                            {item.text}
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}
