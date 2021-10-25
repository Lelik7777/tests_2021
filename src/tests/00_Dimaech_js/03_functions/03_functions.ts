import {CityNewType, GovernmentBuildingType, HouseType, student01, StudentType} from '../02_objects/02objiects';

export function sum01(a: number, b: number) {
    return a + b;
}

sum01(sum01(3, 4), sum01(3, 6));//return 16

export function addTechnology(student: StudentType, technology: string) {
    student.technologies.push({id: new Date().getTime(), title: technology})
}

export function checkCountry(st: StudentType, country: string) {
    return st.address.city.country == country;
}

export function addMoneyToBudget(city: CityNewType, type: 'HOSPITAL' | 'FIRE-STATION', budget: number) {
    for (let i = 0; i < city.governmentBuildings.length; i++) {
        if (city.governmentBuildings[i].type == 'HOSPITAL')
            city.governmentBuildings[i].budget += budget;
        if (city.governmentBuildings[i].type == 'FIRE-STATION')
            city.governmentBuildings[i].budget += budget;
    }

};

export function destroyHousesOnTheStreet(city: CityNewType, street: string) {
    debugger;
    city.houses = city.houses.filter(x => x.address.street.title != street);
};

export function repairHouse(cityHouse: HouseType[], id: number) {
    cityHouse[id].repaired = true;
};
export function toFireStaff(governmentBuilding: GovernmentBuildingType, number: number) {
    governmentBuilding.staffCount-=number;
}
export function createMessage(city: CityNewType) {
    return `Hello,citizens of ${city.title}`;
}