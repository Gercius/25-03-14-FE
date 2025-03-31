import { useEffect, useState } from "react";

const API_ENDPOINT = "http://localhost:3000/api/auto-mechanic";

export const getMechanics = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState({ show: false, msg: "" });
    const [mechanicsData, setMechanicsData] = useState(null);

    const fetchMechanics = async (url) => {
        setIsLoading(true);
        setError({ show: false, msg: "" });

        try {
            const response = await fetch(url);
            const data = await response.json();

            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }
            if (data.data === null) {
                throw new Error("No mechanics found");
            }

            setMechanicsData(data.data);
        } catch (err) {
            setMechanicsData(null);
            setError({ show: true, msg: err.message });
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchMechanics(API_ENDPOINT);
    }, []);

    return { isLoading, error, mechanicsData };
};

export const rateMechanic = async (id, currentRating) => {
    const response = await fetch(`${API_ENDPOINT}/${id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ rating: currentRating + 1 }),
    });

    if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
    }
};
