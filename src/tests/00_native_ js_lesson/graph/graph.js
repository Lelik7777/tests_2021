const friendsList={
    1:{
        id:1,
        name:'Bob',
        gender:'male',
        friends:[2,3,4]
    },
    2:{
        id:2,
        name:'Nick',
        gender:'male',
        friends:[1,3]
    },
    3:{
        id:3,
        name:'Piter',
        gender:'male',
        friends:[4,1,2]
    },
    4:{
        id:4,
        name:'Ann',
        gender:'female',
        friends:[1,3]
    }
}
const findPerson = (list,id) => Object.values(list).find(x=>x.id===id);
const personFriends=(list,id)=>{
   const person=findPerson(list,id);
return person.friends.map(x=>list[x])
}
console.log('Piter',friendsList[3])
console.log('piter`s friends:',friendsList[3].friends.map(x=>friendsList[x]));
console.log(Object.values(friendsList).find(x=>x.id==3))
console.log(findPerson(friendsList,4))
console.log(`${friendsList[4].name}'s friends: o`,personFriends(friendsList,4));

class Graph{
    constructor(list) {
    this.list=list;
    }
    getList(){
        return this.list;
    }
    addVertex(vertex){
        this.list[vertex.id]=vertex;
    }
}
const currentList=new Graph(friendsList);
console.log(currentList.getList());
console.log(currentList.addVertex({id:5,name:'Tom',gender:'male',friends:[]}));
console.log(currentList.getList());