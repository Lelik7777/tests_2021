const products = [
    { name: 'apples', category: 'fruits' },
    { name: 'oranges', category: 'fruits' },
    { name: 'potatoes', category: 'vegetables' }
];
const productsByGroups=products.groupBy()((product)=>{
    return product.category;

})
console.log(productsByGroups)
console.log('hello')