

function*counter(){
    yield 1;
    yield 2;
    yield 3;
}

const generator=counter()
console.log(generator.next())
console.log(generator.next())
console.log(generator.next())
console.log(generator.next())
console.log(generator.next())