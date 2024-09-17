import "../App.css"
export const Heading = (props) => {
    return (
        <>
            <h1 className="text-[25px]" style={{fontFamily : 'Gilroy-ExtraBold'}}>{props.name}</h1>
        </>
    )
}