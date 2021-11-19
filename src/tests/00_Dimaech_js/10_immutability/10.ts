import {CompaniesType, Students_10Type, User10BooksType, User10CompanyType, UserType10} from './10.test';


export const addPropertyIsStudent = (arr: {}[], is: boolean) => {
    return arr.map(x => ({...x, isStudent: true}));
}
export const changeCityUser = (user: UserType10, city: string) => {
    return {...user, address: {...user.address, city}}
}
export const changeStreetUser = (user: UserType10 & User10BooksType, title: string) => {
    return {
        ...user,
        address: {
            ...user.address,
            street: {
                ...user.address.street,
                title,
            }
        }
    }
}
export const addBooksForUser = (user: UserType10 & User10BooksType, arrey: string[]) => {
    return {...user, books: [...user.books, ...arrey]}
}
export const updateBookForUser = (user: User10BooksType & UserType10, bookOff: string, bookIn: string) => {
    return {...user, books: user.books.map(x => x === bookOff ? bookIn : x)}
}
export const removeBookForUser = (user: UserType10 & User10BooksType, bookRemove: string) => {
    return {...user, books: user.books.filter(x => x !== bookRemove)}
}
export const addCompanyForUser = (user: UserType10 & User10CompanyType, company: { id: number, title: string }) => {
    return {...user, company: [...user.company, company]};
}
export const changeCompanyEmployee = (employees: CompaniesType, name: string, id: number, title: string) => {
    return {...employees, [name]: employees[name].map(x => x.id === 1 ? {...x, title} : x)};
}