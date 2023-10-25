
function factory(name,age){
    let person={}
    person.name=name
    person.age=age
    return  person

}

const person1=factory("fazil",26)
const person2=factory("lalu",22)

console.log(person1,person2)