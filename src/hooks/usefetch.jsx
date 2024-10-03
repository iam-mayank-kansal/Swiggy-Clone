import { useEffect, useState } from "react";

const usefetch = (url) => {
    const [APIData, setAPIData] = useState(null);
    const [loading, setLoading] = useState(true); // Track loading state
    const [error, setError] = useState(null);

    useEffect(() => {
        if (url) API_Call();
    }, [url]);

    async function API_Call() {
        try {
            const apiResponse = await fetch(url);
            if (!apiResponse.ok) throw new Error(`HTTP error! Status: ${apiResponse.status}`);

            const apiDataJson = await apiResponse.json();
            setAPIData(apiDataJson);
        } catch (error) {
            setError(error); // Catch and set the error
        } finally {
            setLoading(false); // Set loading to false once the fetch completes
        }
    }

    return { APIData, loading, error };
};

export default usefetch;
