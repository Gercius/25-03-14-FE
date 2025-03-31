const Search = ({ onSearch, specialties }) => {
    const handleChange = (e) => {
        const { name, value } = e.target;
        onSearch((prevFilters) => ({ ...prevFilters, [name]: value }));
    };

    return (
        <form className="row g-3 mb-4">
            <h2 className="text-center">Paieška</h2>

            <div className="col-md-6">
                <label htmlFor="city" className="form-label">
                    Miestas
                </label>
                <input
                    type="text"
                    id="city"
                    name="city"
                    className="form-control"
                    placeholder="Įveskite miestą..."
                    onChange={handleChange}
                />
            </div>

            <div className="col-md-6">
                <label htmlFor="specialty" className="form-label">
                    Specialybė
                </label>
                <input
                    list="specialty-options"
                    id="specialty"
                    name="specialty"
                    className="form-control"
                    placeholder="Pasirinkite specialybę..."
                    onChange={handleChange}
                />
                <datalist id="specialty-options">
                    {specialties?.map((specialty) => (
                        <option key={specialty} value={specialty} />
                    ))}
                </datalist>
            </div>
        </form>
    );
};

export default Search;
