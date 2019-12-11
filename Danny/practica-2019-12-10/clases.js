
class Ironbit {
    constructor() {
        this.monday = {
            firstHour: {
                busy: false,
                subjects: 'matematicas'
            },
            secondHour: {
                busy: false,
                subjects: 'español'
            },
            thirdHour: {
                busy: false,
                subjects: 'ciencias'
            },
            fourthHour: {
                busy: false,
                subjects: 'fisica'
            },
            fifthHour: {
                busy: false,
                subjects: 'matematicas'
            },
            sixthHour: {
                busy: false,
                subjects: 'ciencias'
            },
            seventhHour: {
                busy: false,
                subjects: 'español'
            }
        };
        this.twesday = {
            firstHour: {
                busy: false,
                subjects: 'matematicas'
            },
            secondHour: {
                busy: false,
                subjects: 'historia'
            },
            thirdHour: {
                busy: false,
                subjects: 'ciencias'
            },
            fourthHour: {
                busy: false,
                subjects: 'español'
            },
            fifthHour: {
                busy: false,
                subjects: 'biologia'
            },
            sixthHour: {
                busy: false,
                subjects: 'quimica'
            },
            seventhHour: {
                busy: false,
                subjects: 'español'
            }
        };
        this.wednesday = {
            firstHour: {
                busy: false,
                subjects: 'biologia'
            },
            secondHour: {
                busy: false,
                subjects: 'español'
            },
            thirdHour: {
                busy: false,
                subjects: 'fisica'
            },
            fourthHour: {
                busy: false,
                subjects: 'ciencias'
            },
            fifthHour: {
                busy: false,
                subjects: 'español'
            },
            sixthHour: {
                busy: false,
                subjects: 'matematicas'
            },
            seventhHour: {
                busy: false,
                subjects: 'historia'
            }
        };
        this.thursday = {
            firstHour: {
                busy: false,
                subjects: 'fisica'
            },
            secondHour: {
                busy: false,
                subjects: 'matematicas'
            },
            thirdHour: {
                busy: false,
                subjects: 'quimica'
            },
            fourthHour: {
                busy: false,
                subjects: 'español'
            },
            fifthHour: {
                busy: false,
                subjects: 'biologia'
            },
            sixthHour: {
                busy: false,
                subjects: 'fisica'
            },
            seventhHour: {
                busy: false,
                subjects: 'historia'
            }
        };
        this.friday = {
            firstHour: {
                busy: false,
                subjects: 'fisica'
            },
            secondHour: {
                busy: false,
                subjects: 'matematicas'
            },
            thirdHour: {
                busy: false,
                subjects: 'español'
            },
            fourthHour: {
                busy: false,
                subjects: 'biologia'
            },
            fifthHour: {
                busy: false,
                subjects: 'historia'
            },
            sixthHour: {
                busy: false,
                subjects: 'fisica'
            },
            seventhHour: {
                busy: false,
                subjects: 'quimica'
            }
        };
    }
    // Getter && Setters
    getMonday(){
        return this.monday;
    }
    /*  Siempre se recibira un arreglo de 7 elementos para saber si estan ocupados  */
    setMonday(...Monday){
       /*  this.lunes.firstHour = Monday[0];
        this.lunes.secondHour = Monday[1];
        this.lunes.thirdHour = Monday[2];
        this.lunes.fourthHour = Monday[3];
        this.lunes.fifthHour = Monday[4];
        this.lunes.sixthHour = Monday[5];
        this.lunes.seventhHour = Monday[6]; */
    }
    // Regresa el objeto entero
    getTwesday(){
        return this.twesday;
    }
    setTwesday(...Twesday){
      /*   this.martes.firstHour = Twesday[0];
        this.martes.secondHour = Twesday[1];
        this.martes.thirdHour = Twesday[2];
        this.martes.fourthHour = Twesday[3];
        this.martes.fifthHour = Twesday[4];
        this.martes.sixthHour = Twesday[5];
        this.martes.seventhHour = Twesday[6]; */
    }
    getWednesday(){
        return this.wednesday;
    }
    setWednesday(...Wednesday){
        /* this.miercoles.firstHour = Wendsday[0];
        this.miercoles.secondHour = Wendsday[1];
        this.miercoles.thirdHour = Wendsday[2];
        this.miercoles.fourthHour = Wendsday[3];
        this.miercoles.fifthHour = Wendsday[4];
        this.miercoles.sixthHour = Wendsday[5];
        this.miercoles.seventhHour = Wendsday[6]; */
    }
    getThursday(){
        return this.thursday;
    }
    setThursday(...Thursday){
        /* this.jueves.firstHour = Thursday[0];
        this.jueves.secondHour = Thursday[1];
        this.jueves.thirdHour = Thursday[2];
        this.jueves.fourthHour = Thursday[3];
        this.jueves.fifthHour = Thursday[4];
        this.jueves.sixthHour = Thursday[5];
        this.jueves.seventhHour = Thursday[6]; */
    }
    getFriday(){
        return this.friday;
    }
    setFriday(...Friday){
        /* this.viernes.firstHour = Friday[0];
        this.viernes.secondHour = Friday[1];
        this.viernes.thirdHour = Friday[2];
        this.viernes.fourthHour = Friday[3];
        this.viernes.fifthHour = Friday[4];
        this.viernes.sixthHour = Friday[5];
        this.viernes.seventhHour = Friday[6]; */
    }

    addSubjectsMonday(teacher){
        /*  
        teacher {
            materia: 'matematicas',
            clases: 35
        } */
        let hourDay = 0;
        let schedule = [];
        let hourWork = teacher.hourWork;// Preguntar 
        for (const key in this.monday) {
            if(this.monday[key].busy === false){
                if(this.monday[key].subjects === teacher.subject)  {
                    if ( hourDay <9){
                        this.monday[key].busy = true;
                        schedule.push(this.monday[key]);
                        hourDay++;
                    }else{
                        return schedule;
                    }
                }
            }
        }// Fin de recorrerhour y asignarlas
        return  schedule; // Regresa un array con las hour que trabaja ese dia 
    }
    addSubjectsThuesday(teacher){
        /*  
        teacher {
            materia: 'matematicas',
            clases: 35
        } */
        let hourDay = 0;
        let schedule = [];
        let hourWork = teacher.hourWork;// Preguntar 
        for (const key in this.thuesday) {
            if(this.thuesday[key].busy === false){
                if(this.thuesday[key].subjects === teacher.subject)  {
                    if ( hourDay <9){
                        this.thuesday[key].busy = true;
                        schedule.push(this.thuesday[key]);
                        hourDay++;
                    }else{
                        return schedule;
                    }
                }
            }
        }// Fin de recorrerhour y asignarlas
        return schedule; // Regresa un array con las hour que trabaja ese dia 
    }
    addSubjectsWendsday(teacher){
        /*  
        teacher {
            materia: 'matematicas',
            clases: 35
        } */
        let hourDay = 0;
        let schedule = [];
        let hourWork = profesor.hourWork;// Preguntar 
        for (const key in this.wednesday) {
            if(this.wednesday[key].busy === false){
                if(this.wednesday[key].subjects === profesor.subject)  {
                    if ( hourDay <9){
                        this.wednesday[key].busy = true;
                        schedule.push(this.wednesday[key]);
                        hourDay++;
                    }else{
                        return schedule;
                    }
                }
            }
        }// Fin de recorrerhour y asignarlas
        return schedule; // Regresa un array con las hour que trabaja ese dia 
    }
    addSubjectsThursday(teacher){
        /*  
        teacher {
            materia: 'matematicas',
            clases: 35
        } */
        let hourDay = 0;
        let schedule = [];
        let hourWork = teacher.hourWork;// Preguntar 
        for (const key in this.wednesday) {
            if(this.wednesday[key].busy === false){
                if(this.wednesday[key].subjects === teacher.subject)  {
                    if ( hourDay <9){
                        this.wednesday[key].busy = true;
                        schedule.push(this.wednesday[key]);
                        hourDay++;
                    }else{
                        return schedule;
                    }
                }
            }
        }// Fin de recorrerhour y asignarlas
        return schedule; // Regresa un array con las hour que trabaja ese dia 
    }



}
class Employee {
     constructor( name, years){
         this.name = name;
         this.years = years;
     }
}
class teacher extends Employee{
    constructor (name, subjects, years){
        super(name, years);
        this.subjects = [...subjects];
    }
}
class teacherPlace extends teacher{
    constructor ( name,  subjects, years){
        super( name, subjects, years);
        this.hourT = 50;
        this.hourL = 15;
        this.numClass = 35;
    }
    datos(){
        let hourLibreExtra = 0;
        if(this.years>= 5){
             hourLibreExtra = parseInt((this.years)/5);
        }
        let profe = {
            subjects :  [...this.subjects],
            hourWork : this.hourT - this.hourL -hourLibreExtra,
        }
        return profe;
    }
}
class teacherContrato extends teacher{
    constructor ( name, subjects, years){
        super( name, subjects, years);
        this.hourT = 20;
        this.numClass = 15;
        this.hourL = 5;
    }
}
class Administrative extends Employee {
    constructor(name, years){
        super(name, years);
        this.hourT = 45;
        this.hourL=5;
    }
}
// var prueba = new Ironbit('test');
// console.log(prueba.horario);