import MechanicCard from "./MechanicCard";

const MechanicList = ({ mechanics }) => {
    return (
        <ul className=" list-unstyled row g-3">
            {mechanics?.map((mechanic) => (
                <MechanicCard key={mechanic._id} mechanicData={mechanic} />
            ))}
        </ul>
    );
};

export default MechanicList;
