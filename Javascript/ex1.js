

function Student(name, age, grade, subjects){
    this.name = name;
    this.age = age;
    this.grade = grade;
    this.subjects = subjects;

   this.printInfo = function(){
        console.log("-----Student Info-----");
        console.log("Name :"+this.name);
        console.log("Age :"+this.age);
        console.log("Grade :"+this.grade);
        console.log("Subjects  :"+this.subjects);
   }
}

const student1 = new Student("Jeevak", 24, "A+", ["Web Dev", "Python", "Data Science"]);
student1.printInfo();


const student2 = new Student("Atmatej", 25, "A+",["Javascript", "React", "MongoDB"])
student2.printInfo();
