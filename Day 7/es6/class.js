const student1 ={
    name: "Alice",
    age: 20,
    section: "A",
    }
const student2 ={
    name: "Bob",
    age: 22,
    section: "B",
}
console.log("student1 details: ", student1);
console.log("student2 details: ", student2);

class student{
    constructor(name, age, section){
        this.name = name;
        this.age = age;
        this.section = section;
    }
}
const student3 = new student("Charlie", 23, "C");
const student4 = new student("David", 21, "D");
console.log("student3 details: ", student3);
console.log("student4 details: ", student4);