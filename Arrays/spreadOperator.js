const names = ["Harry", "Nail"]

const copiedNames = [...names]
//this created two new and separate variables with same values
copiedNames.push("Louis")
console.log(names, copiedNames)

const prices = [1,2,4.22, -2, 33, 34.2]
console.log(Math.min(...prices))

const persons = [{name: "coach", age: 23}, {name: "sds", age: 33}]
const copiedPersons = [...persons]
persons.push({name: 'moo', age: 33})
console.log(persons, copiedPersons)

copiedPersons[0].name = "new name"
console.log(persons, copiedPersons);
//this will have effect in both variables as we are only copying the address of objects in an array not all the elements
//as there are only addresses of objects present in persons array. -> hence you know objects in js, all explanation done.


//========================== Array Destructuring
const fullName = ['Harry', "Styles", 32, [{things:"some otherdata"}]]
const [firstName, lastName, ...otherInfo] = fullName;
console.log(firstName, lastName, otherInfo);

