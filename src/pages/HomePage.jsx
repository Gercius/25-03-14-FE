import { useState } from "react";
import { getUniqueSpecialties } from "../utils";
import { getMechanics } from "../api/mechanicsApi";
import MechanicList from "../components/MechanicList";
import Search from "../components/Search";

const HomePage = () => {
    const [searchFilters, setSearchFilters] = useState({ city: "", specialty: "" });
    let { isLoading, error, mechanicsData } = getMechanics();
    const specialties = getUniqueSpecialties(mechanicsData);

    if (searchFilters.city || searchFilters.specialty) {
        mechanicsData = mechanicsData.filter(
            (mechanicDataObj) =>
                mechanicDataObj.city.toLowerCase().includes(searchFilters.city.toLowerCase()) &&
                mechanicDataObj.specialty.toLowerCase().includes(searchFilters.specialty.toLowerCase())
        );
    }

    return (
        <div className="container">
            <h1 className="text-center">Auto Meistrai</h1>
            <section className="row justify-content-center">
                <Search onSearch={setSearchFilters} specialties={specialties} />
                <MechanicList mechanics={mechanicsData} />
            </section>

            {isLoading && <h1 className="text-center">Kraunama...</h1>}
            {error && <h1 className="text-center">{error.msg}</h1>}
        </div>
    );
};

export default HomePage;
