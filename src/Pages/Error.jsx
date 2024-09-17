import { useRouteError } from "react-router-dom";
import Error_404 from "../assets/error_404.jpg";

export const Error = () => {
    const error = useRouteError();
    console.log("Route Error: ", error);

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <img src={Error_404} alt="404 Not Found" className="w-auto h-96" />
            <h1 className="text-4xl font-bold mt-4">Oops! Something went wrong.</h1>
            {error && <p className="text-lg mt-2">Error: {error.statusText || error.message}</p>}
            <button 
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
                onClick={() => window.location.href = '/'}
            >
                Go Back to Home
            </button>
        </div>
    );
};
