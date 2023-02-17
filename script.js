function seyHello() {
    const names = Array.from(arguments);
    console.log(names);
    if(names.length == 1) {
        return `Hello  ${names}!`;
    } return `Hello guys, ${names}!`;
}

console.log(seyHello('Petro'));

console.log(seyHello('Petro', 'Ivan', 'Olga'));