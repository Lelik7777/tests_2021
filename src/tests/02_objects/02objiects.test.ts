import {CityNewType} from './02objiects';


let city: CityNewType;
beforeEach(function () {
    city = {
        title: 'New York',
        houses: [{
            builtAt: 2012,
            repaired: false,
            address: {
                number: 100,
                street: {
                    title: 'White street',
                }
            }
        }, {
            builtAt: 2008,
            repaired: false,
            address: {
                number: 100,
                street: {
                    title: 'Happy street'
                }
            }
        }, {
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
                staffCount: 1000,
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
test('city should contains 3 houses', function () {
    expect(city.houses.length).toBe(3);
    expect(city.houses[0].builtAt).toBe(2012);
    expect(city.houses[0].repaired).toBe(false);
    expect(city.houses[0].address.number).toBe(100);
    expect(city.houses[0].address.street.title).toBe('White street');
    expect(city.governmentBuildings.length).toBe(2);
    expect(city.governmentBuildings[0].type).toBe('HOSPITAL');
    expect(city.governmentBuildings[0].budget).toBe(200000);
    expect(city.governmentBuildings[0].staffCount).toBe(1000);
    expect(city.governmentBuildings[0].address.street.title).toBe('South Str');
});