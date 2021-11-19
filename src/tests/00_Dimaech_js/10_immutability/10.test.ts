import {
    addBooksForUser, addCompanyForUser,
    addPropertyIsStudent,
    changeCityUser, changeCompanyEmployee,
    changeStreetUser,
    removeBookForUser,
    updateBookForUser
} from './10';

export type Students_10Type = {
    name: string;
    age: number;
    isMarried: boolean;
    scores: number;
}
export type UserType10 = {
    name: string;
    age: number;
    address: {
        city: string;
        street: { title: string }
    }
}
export type User10BooksType = {
    books: string[];
}
export type User10CompanyType={
    company:{id:number,title:string}[]
}
export type CompaniesType={
    [key:string]:{id:number,title:string}[];
}
let students_10: Students_10Type[];
let isStudent: boolean;
let user: UserType10;
let userWithBooks: UserType10 & User10BooksType;
let userWhereWorks:UserType10&User10CompanyType;
let employees:CompaniesType;
beforeEach(() => {
    students_10 = [
        {
            name: 'Bob',
            age: 22,
            isMarried: true,
            scores: 95
        },
        {
            name: 'Alex',
            age: 23,
            isMarried: true,
            scores: 89
        },
        {
            name: 'alex',
            age: 23,
            isMarried: true,
            scores: 89
        },
        {
            name: 'Helge',
            age: 21,
            isMarried: true,
            scores: 89
        },
        {
            name: 'Nick',
            age: 20,
            isMarried: false,
            scores: 120
        },
        {
            name: 'John',
            age: 19,
            isMarried: false,
            scores: 121
        },
    ];
    user = {
        name: 'Bob',
        age: 34,
        address: {
            city: 'Moscow',
            street: {
                title: 'Red Square'
            }
        }
    }
    userWithBooks = {
        name: 'Alex',
        age: 43,
        address: {
            city: 'Simf',
            street: {
                title: 'Kirova'
            }
        },
        books: ['Html&Css', 'React', 'JS'],
    }
    userWhereWorks={
        name: 'Alex',
        age: 43,
        address: {
            city: 'Simf',
            street: {
                title: 'Kirova'
            }
        },
        company:[
            {id:1,title:'Epam'},
            {id:2,title:'Yandex'},
        ]
    };
    employees={
        ['Dimich']:[{id:1,title:'Epam'},{id:2,title:'it-incubator'}],
        ['Valera']:[{id:1,title:'it-incubator'}]
    }

});
test('add property immutibility', () => {
    const copy10 = addPropertyIsStudent(students_10, true);
    expect(copy10[0].isStudent).toBe(true)
});
test('change city user', () => {
    const userChangeCity = changeCityUser(user, 'Kiev');
    userChangeCity.address.street.title = 'Bankova';
    userChangeCity.address.city = 'Borispol'
    expect(user).not.toBe(userChangeCity);
    expect(user.address.city).toBe('Moscow');
    expect(userChangeCity.address.city).toBe('Borispol');
    expect(userChangeCity.address.street.title).toBe('Bankova');
    expect(user.address.street.title).toEqual(userChangeCity.address.street.title);
});
test('change street for user', () => {
    const userWithBooksMove = changeStreetUser(userWithBooks, 'Lenina');
    expect(userWithBooksMove).not.toBe(userWithBooks);

    expect(userWithBooksMove.address.street.title).toBe('Lenina')
});
test('add books for user', () => {
    const userWithAddedBooks = addBooksForUser(userWithBooks, ['ts', 'res api']);
    expect(userWithAddedBooks).not.toBe(userWithBooks);
    expect(userWithAddedBooks.address.city).toEqual(userWithBooks.address.city);
    expect(userWithAddedBooks.books[3]).toBe('ts');
    expect(userWithAddedBooks.books[4]).toBe('res api');
    expect(userWithBooks.books.length).toBe(3);
    expect(userWithAddedBooks.books.length).toBe(5);
});
test('change book for user', () => {
    const newUser = updateBookForUser(userWithBooks, 'JS', 'TS');
    expect(newUser.books.length).toBe(3);
    expect(newUser.books[2]).toBe('TS');
    expect(userWithBooks.books[2]).toBe('JS');
});
test('remove book for user', () => {
    const newUser = removeBookForUser(userWithBooks,
        'JS');
    expect(userWithBooks.books.length).toBe(3);
    expect(newUser.books.length).toBe(2);
});
test('add company for user',()=>{
   const newUser=addCompanyForUser(userWhereWorks,{id:3,title:'Google'});
   expect(userWhereWorks.company.length).toBe(2);
   expect(newUser.company.length).toBe(3);
   expect(newUser.company[2].title).toBe('Google');
});
test('change company name for employee',()=>{
   const newEmployee=changeCompanyEmployee(employees,'Dimich',1,'Google');
   expect(employees['Dimich'][0].title).toBe('Epam');
   expect(newEmployee['Dimich'][0].title).toBe('Google');
   expect(employees['Valera']).toBe(newEmployee['Valera']);
   expect(employees['Dimich']).not.toBe(newEmployee['Dimich']);
});