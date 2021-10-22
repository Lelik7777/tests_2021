export  type CityNewType = {
    title: string;
    houses: HouseType[];
    governmentBuildings: GovernmentBuildingType[];
    citizensNumber: number;
}
type StreetType = {
    title: string;
}
type AddressHouseType = {
    number: number;
    street: StreetType;
}
 export type HouseType = {
    id:number;
    builtAt: number;
    repaired: boolean;
    address: AddressHouseType;
}
export type GovernmentBuildingType = {
    type: 'HOSPITAL' | 'FIRE-STATION';
    budget: number;
    staffCount: number;
    address: AddressGovernBuildingType;
}
type AddressGovernBuildingType = {
    street: { title: string }
}
export type StudentType = {
    id: number;
    name?: string;
    'position in space': string;
    age: number;
    isActive: boolean;
    address: AddressType;
    technologies: TechnologyType[];
}
type AddressType = {
    streetTitle: string;
    city: CityType;
}
type CityType = {
    title: string;
    country: string;
}
type TechnologyType = {
    id: number;
    title: string;
}
export const student01: StudentType = {
    id: 1,
    name: 'Bob',
    'position in space': 'Earth',
    age: 40,
    isActive: true,
    address: {
        streetTitle: 'Kirova 21',
        city: {
            title: 'Simferopol',
            country: 'Russia',
        }
    },
    technologies: [
        {id: 1, title: 'Html&&css'},
        {id: 2, title: 'JS'},
        {id: 3, title: 'React'},
        {id: 4, title: 'Vue'}
    ],
}