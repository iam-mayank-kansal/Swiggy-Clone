import { Heading } from "./Heading";
import Rating from "../assets/images/Rating.png"

export const ResStarter = ({ RestaurentDetails }) => {
    const data = RestaurentDetails?.card?.card?.info
    console.log("Restaurent Details : ", data)
    return (
        <section >
            <Heading name={data.name} />
            <div className="flex flex-col gap-[2px] px-7 py-5 rounded-2xl mt-3" style={{boxShadow : "0px 15px 15px 6px #BDBDBD"}}>
                <div className="flex text-[17px] gap-2 font-gilroySemiBold items-center ">
                    <img src={Rating} alt={Rating} height={5} width={25} />
                    <div>
                        <span>{data.avgRating} ({data.totalRatingsString})</span>
                        <span> • </span>
                        <span>{data.costForTwoMessage}</span>
                    </div>
                </div>
                <h5 className="flex text-[17px] gap-2 font-gilroySemiBold text-red-700 underline cursor-pointer pl-2">{data.cuisines.join()}</h5>
                <p className="text-[17px] gap-2 font-gilroySemiBol pl-2"> <span className="font-gilroyExtraBold"> • </span> Outlet : {data.locality}</p>
                <p className="text-[17px] gap-2 font-gilroySemiBol pl-2"> <span className="font-gilroyExtraBold"> • </span> {data.sla.slaString}</p>

            </div>
        </section>
    )
}