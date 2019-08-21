class Person{

    constructor(public id:number,public name:string,public city:string,public salary:number){}
    details():string{
        return this.id+' '+this.name+' '+this.city+' '+this.salary;
    }
}
let p=new Person(100,'pooja','banglore',1000000);
console.log(p.details());
export class Emp extends Person{
    constructor(id:number,name:string,city:string,salary:number,public age:number)
    {
        super(id,name,city,salary);
    }
    details():string{
        return super.details()+' '+this.age;
    }
}
let E1=new Emp(100,'pooja','banglore',1000000,21);
console.log(E1.details());