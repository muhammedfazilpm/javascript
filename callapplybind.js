function greet(name){
    console.log("hello ",name, "i am" , this.job)
}

const person={
    job :"developer"
}

greet.call(person,"fazil")

greet.apply(person,["fazils"])

const binds=greet.bind(person,"muhammed")

binds()