export function sum(a:number,b:number) {
    return a+b;
}
export function mult(a:number,b:number) {
    return a*b;
}
export function splitString(string:string) {
    return string.toLowerCase().split(' ');
}
export function getCount(string:string) {
    const arr=string.toLowerCase().split('');
   return  arr.filter(x=>x=='a'||x=='e'||x=='i'||x=='o'||x=='u').length;
}
export function f() {
    
}