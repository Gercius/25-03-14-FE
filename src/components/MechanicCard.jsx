const MechanicCard = ({ mechanicData }) => {
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
                <div className="card-footer text-muted d-flex justify-content-around">
                    <button>Like</button>
                    <span>Įvertinimas: {mechanicData.rating}</span>
                </div>
            </div>
        </li>
    );
};

export default MechanicCard;
