import {student01, StudentType} from '../02_objects/02objiects';
export function sum01(a:number, b:number) {
    return a+b;
}
sum01(sum01(3, 4), sum01(3, 6));//return 16

export function addTechnology(student:StudentType,technology:string ) {
 student.technologies.push({id:new Date().getTime(),title:technology})
}