import {CityNewType, student01} from '../02_objects/02objiects';
import {
    addMoneyToBudget,
    addTechnology,
    checkCountry, createMessage,
    destroyHousesOnTheStreet,
    repairHouse,
    toFireStaff
} from './03_functions';

let city: CityNewType;
beforeEach(function () {
    city = {
        title: 'New York',
        houses: [
            {
                id: 1,
                builtAt: 2012,
                repaired: false,
                address: {
                    number: 100,
                    street: {
                        title: 'White street',
                    }
                }
            }, {
                id: 2,
                builtAt: 2008,
                repaired: false,
                address: {
                    number: 100,
                    street: {
                        title: 'Happy street'
                    }
                }
            }, {
                id: 3,
                builtAt: 2020,
                repaired: false,
                address: {
                    number: 101,
                    street: {
                        title: 'Happy street'
                    }
                }
            }],
        governmentBuildings: [
            {
                type: 'HOSPITAL',
                budget: 200000,
                staffCount: 200,
                address: {
                    street: {
                        title: 'South Str',
                    }
                }
            },
            {
                type: 'FIRE-STATION',
                budget: 500000,
                staffCount: 1000,
                address: {
                    street: {
                        title: 'Central Str',
                    }
                }
            }
        ],
        citizensNumber: 1000000,
    }
});
test('add technology to student01', function () {
    expect(student01.technologies.length).toBe(4);
    addTechnology(student01, 'Angular');
    expect(student01.technologies.length).toBe(5);
    expect(student01.technologies[4].title).toBe('Angular');
    expect(student01.technologies[4].id).toBe(new Date().getTime());
});
test('check country of student', function () {
    expect(checkCountry(student01, 'Russia')).toBe(true);
});
test('budget should be changed for FIRE-STATION', function () {
    addMoneyToBudget(city, 'HOSPITAL', 100000);
    expect(city.governmentBuildings[0].budget).toBe(300000)
});
test('budget for Fire-station', function () {
    addMoneyToBudget(city, 'FIRE-STATION', -100000);
    expect(city.governmentBuildings[1].budget).toBe(400000)
})
test('houses should be destroyed', function () {
    destroyHousesOnTheStreet(city, 'Happy street');
    expect(city.houses.length).toBe(1);
    expect(city.houses[0].id).toBe(1)

});
test('house should be repaired', function () {
    repairHouse(city.houses, 1);
    expect(city.houses.length).toBe(3);
    expect(city.houses[1].repaired).toBeTruthy();
});
test('staff should be increased', () => {
    toFireStaff(city.governmentBuildings[0],20)
    expect(city.governmentBuildings[0].staffCount).toBe(180)
})
test('create greeting for city citizens',()=>{
   const message=createMessage(city);
   expect(createMessage(city)).toBe('Hello,citizens of New York');
});