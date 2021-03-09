// ES6 modules and classes
import { text, setText } from './myModule.js'

// import { text as message } from './myModule.js'  , import a nam change kore dilam

console.log(text);
setText("Function is import and exported");

console.log(text);

// class
// class a must constructor lagbe
class Student {

    constructor(id, name) {
        this.id = id;
        this.name = name;
    }

    set studentName(name) {
        this.name = name;
    }

    get studentInfo() {
        return this.id + " " + this.name;
    }
}

var s1 = new Student(113, "Hasan");
console.log(s1);
console.log(s1.id);
console.log(s1.name);

s1.studentName = "saju";
console.log(s1.name);

console.log(s1.studentInfo);


