import { Heading } from "./Heading";

export const ResStarter = ({ RestaurentDetails }) => {
    const data = RestaurentDetails?.card?.card?.info
    console.log("Restaurent Details : ",data)
    return (
        <section className="max-w-[1200px] mx-auto">
            <Heading name={data ? data.name : "Loading..."} />
        </section>
    )
}