class Family {
    constructor(lastName, blood) {
        this.lastName = lastName;
        this.blood = blood;
        this.tree = new Set();
    }
    addMember (member){   
        this.tree.add(member);
    }
}
class Human extends Family{
    constructor (lastName, blood,sex, age, name ){
        super(lastName, blood);
        this.sex = sex;
        this.age = age;
        this.name = name;
        this.tasks = [];
    }
    addToFamilyFromHuman(){
        return {
            lastName : this.lastName,
            blood : this.blood,
            sex : this.sex,
            age: this.age,
            name: this.name
        };
    }
}
class Student extends Human {
    constructor(lastName, blood,sex, age, name, school) {
        super(lastName, blood,sex, age, name);
        this.school = school;
        this.tasks = [];
    }
    addToFamilyFromStudet(){
        return { school: this.school,
                ...super.addToFamilyFromHuman()
            };
    }
}




class Animal {
    constructor(type = 'quadruped', agressive ='false', age = '0' ) {
        this.type = type;
        this.agressive = agressive;
        this.age = age;
    }
}

class Pet {
    constructor(type = 'quadruped', agressive =false, age = 0, petHouse) {
        super(type, agressive, age);
        this.petHouse  = petHouse;
    }
     static addTask(description){

     }
     static addToPropertys(type = 'quadruped', agressive =false, age = 0, petHouse= false){
         let pet = new Pet( type,agressive,age,petHouse  );
         return pet;
     }

}

class Task {
    constructor(who, description) {
        this.ref =who;
        this.description = description;
    }
    static addTask(who, description){
        let taskP = new Task(who, description);
        return taskP;
        }
}