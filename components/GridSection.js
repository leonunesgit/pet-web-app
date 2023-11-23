import { useEffect, useState } from "react";
import Card from "./Card";

const GridSection = ({ dbData }) => {
    const dataDbRes = dbData;

    const [ selectedType, setSelectedType ] = useState([]);
    const [ selectedAge, setSelectedAge ] = useState([]);
    const [ selectedBreed, setSelectedBreed ] = useState(null);
    const [ selectedLocalization, setSelectedLocalization ] = useState(null);
    
    const getUniqueValues = (property) => {
        const uniqueValues = Object.values(dataDbRes.pets)
            .map(pet => pet[property])
            .filter((value, index, self) => self.indexOf(value) === index)
            .sort();
            return uniqueValues;
    }

    const getAgeGroup = (age) => {
        return age <= 1
        ? '0-1 ano'
        : age > 1 && age <= 3
        ? '1-3 anos'
        : 'mais de 3 anos';
    }

    const getTypeGroup = (type) => {
        if(type === 'Dog') return 'Dog';
        if(type === 'Cat') return 'Cat';
        return 'Other';
    }

    const uniqueType = getUniqueValues('type');
    const uniqueBreed = getUniqueValues('breed');
    const uniqueLocation = getUniqueValues('location');

    const uniqueAge = [];
    for(const petId in dataDbRes.pets) {
        const pet = dataDbRes.pets[petId];
        const age = getAgeGroup(pet.age);
        if(!uniqueAge.includes(age)) {
            uniqueAge.push(age);
        }
        uniqueAge.sort();
    }

    const filteredPets = Object.values(dataDbRes.pets).filter((pet) => {
        if(selectedType.length > 0 && !selectedType.includes(getTypeGroup(pet.type))) return false;
        if(selectedAge.length > 0 && !selectedAge.includes(getAgeGroup(pet.age))) return false;
        if(selectedBreed && pet.breed !== selectedBreed) return false;
        if(selectedLocalization && pet.location !== selectedLocalization) return false;
        return true;
    });

    return(
        <div className="grid-section">
            <div className="filter-section-out"></div>
            <div className="cards-section">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    )
}

export default GridSection;