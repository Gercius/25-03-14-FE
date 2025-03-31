import { useEffect, useState } from "react";
import { rateMechanic } from "../api/mechanicApi";

const MechanicCard = ({ mechanicData }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [rating, setRating] = useState(mechanicData.rating || 0);
    const [isLiked, setIsLiked] = useState(false);

    useEffect(() => {
        const likedMechanics = JSON.parse(localStorage.getItem("likedMechanics")) || [];
        if (likedMechanics.includes(mechanicData._id)) {
            setIsLiked(true);
        }
    }, [mechanicData._id]);

    const handleRateMechanic = async () => {
        if (isLiked) return;

        setIsLoading(true);

        try {
            await rateMechanic(mechanicData._id, rating);
            setRating(rating + 1);

            const likedMechanics = JSON.parse(localStorage.getItem("likedMechanics")) || [];
            likedMechanics.push(mechanicData._id);
            localStorage.setItem("likedMechanics", JSON.stringify(likedMechanics));

            setIsLiked(true);
        } catch (err) {
            console.error(err);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <li className="col-12 col-md-6 col-lg-4 col-xl-3">
            <div className="card h-100 shadow-sm">
                <img
                    src={mechanicData.imageUrl}
                    className="card-img-top"
                    alt={`${mechanicData.name} ${mechanicData.lastName}`}
                />
                <div className="card-body">
                    <h5 className="card-title">
                        {mechanicData.name} {mechanicData.lastName}
                    </h5>
                    <p className="card-text">
                        <strong>Miestas:</strong> {mechanicData.city}
                    </p>
                    <p className="card-text">
                        <strong>Specialybė:</strong> {mechanicData.specialty}
                    </p>
                    <p className="card-text">
                        <strong>Autoservisas:</strong> {mechanicData.autoRepairShop.name}
                    </p>
                </div>
                <div className="card-footer text-muted d-flex justify-content-around align-items-center">
                    <button className="btn btn-primary " onClick={handleRateMechanic} disabled={isLiked || isLoading}>
                        {isLoading ? "Patiktukinama" : "Patiktukinti"}
                    </button>
                    <span>Įvertinimas: {rating}</span>
                </div>
            </div>
        </li>
    );
};

export default MechanicCard;
