export const getUniqueSpecialties = (mechanicsData) => {
    if (!mechanicsData) return [];

    const specialties = new Set();
    mechanicsData.forEach((mechanicDataObj) => specialties.add(mechanicDataObj.specialty));
    return [...specialties];
};
